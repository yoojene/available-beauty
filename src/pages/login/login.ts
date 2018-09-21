import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  Loading,
  ViewController,
  Platform,
} from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, Validators } from '@angular/forms';

import { APP_TEST_CONFIG } from '../../config/app.test.config';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AuthProvider } from '../../providers/auth/auth';
import {
  TwitterConnect,
  TwitterConnectResponse,
} from '@ionic-native/twitter-connect';
import { StorageProvider } from '../../providers/storage/storage';
import { UserProvider } from '../../providers/user/user';
import { AvailabilityProvider } from '../../providers/availability/availability';

@IonicPage({ defaultHistory: ['LandingPage'] })
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: any;
  public invalidLogin = false;
  public error: string;
  public isStylist = false;
  private stylistRegistered = false;

  private defaultAvailableSlots: any;

  public loading: Loading;

  public userLoginHeaderText = 'Login to book beauty...';
  public stylistLoginHeaderText = 'Login to advertise beauty...';

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private modal: ModalController,
    public afAuth: AngularFireAuth,
    public auth: AuthProvider,
    private loadingCtrl: LoadingController,
    private storage: StorageProvider,
    private user: UserProvider,
    private viewCtrl: ViewController,
    private available: AvailabilityProvider,
  ) {
    this.loginForm = formBuilder.group({
      email: [
        APP_TEST_CONFIG.email,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        APP_TEST_CONFIG.password,
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
    });

    // get the default available slots from remote configuration
    this.available.getDefaultAvailableSlots(
      // callback
      (data) => {
        this.defaultAvailableSlots = data
      }
    )
  }

  // Lifecycle

  public ionViewWillLoad() {
    console.log('ionViewWillLoad LoginPage');
    this.isStylist = this.navParams.get('isStylist');
  }

  public ionViewDidLoad() {
    this.storage
      .getStorage('stylistRegistered')
      .subscribe(res => (this.stylistRegistered = res));
  }

  // Public
  public openResetPassword() {
    const passModal = this.modal.create('PasswordPage');
    passModal.present();
  }

  public onLoginSubmit() {
    const userEmail = this.loginForm.value.email;
    const userPassword = this.loginForm.value.password;

    this.loading = this.loadingCtrl.create();

    this.loading.present().then(() => {
      this.auth
        .doNativeLogin(userEmail, userPassword)
        .then(res => {
          console.log(res);
          const uid = res.uid;
          console.log(uid);
          //temporary setting of availability slots
          this.user.setStylistAvailableSlots(uid, 20);
          this.user
            .getUserById(uid)
            .valueChanges()
            .subscribe((userres: any) => {
              console.log(userres);
              this.loading.dismiss().catch();

              if (userres.isStylist) {
                console.log('push');
                this.navCtrl.push('TabsPage', {
                  isStylist: userres.isStylist,
                });
              } else {
                console.log('dismiss');
                this.viewCtrl.dismiss({ isStylist: userres.isStylist });
              }
            });
        })
        .catch(err => {
          this.invalidLogin = true;
          this.error = err.message; // This is the Firebase error - too techy?
          console.error(err.code);
          console.error(err.message);
          this.loading.dismiss();
        });
    });
  }

  public onFacebookTap() {
    const loading = this.loadingCtrl.create();

    loading.present().then(() => {
      this.auth
        .doFacebookLogin(this.isStylist)
        .then(res => {
          console.log(res);
          loading.dismiss();
          // this.navCtrl.push('LookingPage');
          this.setNavigationPage(this.isStylist);
        })
        .catch(err => {
          console.error(err);
          loading.dismiss();
          this.invalidLogin = true;
          this.error = `${err.email} ${err.message}`; // This is the Firebase error - too techy?
        });
    });
  }

  public onGoogleTap() {
    const loading = this.loadingCtrl.create();

    loading.present().then(() => {
      this.auth
        .doGoogleLogin(this.isStylist)
        .then(userInfo => {
          loading.dismiss();
          const uid = userInfo.uid;
          console.log('User id: ', uid)
          if (this.isStylist) {
            return this.user
              .setStylistAvailableSlots(uid, this.defaultAvailableSlots); // set default available slots
          } else {
            return
          }
        })
        .then(() => {
          this.setNavigationPage(this.isStylist);
        })
        .catch(err => {
          loading.dismiss();
          console.error(err);
          this.invalidLogin = true;
          this.error = err; // Actual error code returned from Google Auth i.e. 12501
        });
    });
  }

  public onTwitterTap() {
    const loading = this.loadingCtrl.create();

    loading.present().then(() => {
      this.auth.doTwitterLogin(this.isStylist).then(
        (res: TwitterConnectResponse) => {
          console.log(res);
          loading.dismiss();
          this.setNavigationPage(this.isStylist);
        },
        err => {
          loading.dismiss();
          console.error(err); // Eg: Failed Login Session
          // We are not setting this.error here as Twitter opens up the native Oauth window so
          // any errors are captured there.
        }
      );
    });
  }

  public openRegisterPage() {
    const regModal = this.modal.create('RegisterPage', {
      isStylist: this.isStylist,
    });
    regModal.present();
  }
  /**
   * Reset boolean for server side error display
   *
   */
  public onEmailFocus() {
    this.invalidLogin = false;
  }
  /**
   * Toggle password or text input
   *
   * @param input
   */
  public showPassword(input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }

  private setNavigationPage(stylist) {
    if (!stylist) {
      // A regular user
      return this.navCtrl.push('LookingPage');
    } else {
      // A first time stylist login
      if (this.stylistRegistered) {
        this.navCtrl.push('TabsPage', { isStylist: true });
      } else {
        // subsequent stylist logins
        return this.navCtrl.push('StylistRegisterPage');
      }
    }
  }
}
