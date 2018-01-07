import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../model/app.state';

import { LoginAction, UserNotValidatedAction, LoginSuccessAction } from '../../model/auth/auth.actions';

import { APP_TEST_CONFIG } from '../../config/app.test.config';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AuthProvider } from '../../providers/auth/auth';
import { TwitterConnect, TwitterConnectResponse } from '@ionic-native/twitter-connect';

@IonicPage({ defaultHistory: ['LandingPage'] })
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm: any;
  public invalidLogin: boolean = false;
  public error: string;
  private loginType: string;

  constructor(
    public store: Store<AppState>,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private modal: ModalController,
    public afAuth: AngularFireAuth,
    public auth: AuthProvider,
    private loading: LoadingController
  ) {
    this.loginForm = formBuilder.group({
      email: [
        APP_TEST_CONFIG.email,
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [
        APP_TEST_CONFIG.password,
        Validators.compose([Validators.minLength(6), Validators.required])
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.navParams.get('loginType'));

    this.loginType = this.navParams.get('loginType');

  }

  openResetPassword() {
    let passModal = this.modal.create('PasswordPage');
    passModal.present();
  }

  onLoginSubmit() {
    const userEmail = this.loginForm.value.email;
    const userPassword = this.loginForm.value.password;

    let loading = this.loading.create();

    loading.present().then(() => {
      this.auth.doNativeLogin(userEmail, userPassword).then(
        res => {
          console.log(res);
          loading.dismiss();
          this.navCtrl.push('LookingPage');
        },
        err => {
          loading.dismiss();
          this.invalidLogin = true;
          this.error = err.message; // This is the Firebase message - too techy?
          console.error(err.code);
          console.error(err.message);
        }
      );
    });
  }

  onFacebookTap() {
    let loading = this.loading.create();

    loading.present().then(() => {
      this.auth
        .doFacebookLogin()
        .then(res => {
          console.log(res);
          loading.dismiss();
          this.navCtrl.push('LookingPage');
        })
        .catch(err => {
          console.error(err);
          loading.dismiss();
          this.invalidLogin = true;
          this.error = `${err.email} ${err.message}`; // This is the Firebase message - too techy?
        });
    });
  }

  onGoogleTap() {
    let loading = this.loading.create();

    loading.present().then(() => {
      this.auth
        .doGoogleLogin()
        .then(res => {
          loading.dismiss();
          console.log(res);
          this.navCtrl.push('LookingPage');
        })
        .catch(err => {
          loading.dismiss();
          console.error(err);
          this.invalidLogin = true;
          this.error = err; // Actual error code returned from Google Auth i.e. 12501
        });
    });
  }

  onTwitterTap() {
    let loading = this.loading.create();

    loading.present().then(() => {
      this.auth.doTwitterLogin().then(
        (res: TwitterConnectResponse) => {
          console.log(res);
          loading.dismiss();
          this.navCtrl.push('LookingPage');
        },
        err => {
          loading.dismiss();
          console.error(err);  // Eg: Failed Login Session
          // We are not setting this.error here as Twitter opens up the native Oauth window so
          // any errors are captured there.
        }
      );
    });
  }

  openRegisterPage() {
    let regModal = this.modal.create('RegisterPage', {'loginType': this.loginType});
    regModal.present();
  }
/**
 * Reset boolean for server side error display
 *
 * @memberof LoginPage
 */
onEmailFocus() {
    this.invalidLogin = false;
  }
/**
 * Toggle password or text input
 *
 * @param {any} input
 * @memberof LoginPage
 */
showPassword(input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
