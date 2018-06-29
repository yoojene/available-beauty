import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from '../../forms/password-validation';

import { Store } from '@ngrx/store';
import { AppState } from '../../model/app.state';

import { UserProvider } from '../../providers/user/user';
import { LocationProvider } from '../../providers/location/location';
import { HttpErrorResponse } from '@angular/common/http';
import {
  RegisterAction,
  RegisterErrorAction,
} from '../../model/auth/auth.actions';
import { AuthProvider } from '../../providers/auth/auth';
import { StorageProvider } from '../../providers/storage/storage';

import firebase from 'firebase';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public registerForm: any;
  public regError: any;
  public invalidReg = false;
  private coords: any;

  public passwordError = 'Passwords do not match';
  public minLengthError = 'Passwords must be 6 characters or more';
  public termsConditionsText: any =
    '<p> By signing up you agree to the <a href="">Terms and Conditions</a> and <a href=""> Privacy Policy</a></p>';

  private isStylist: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public user: UserProvider,
    public location: LocationProvider,
    private auth: AuthProvider,
    private storage: StorageProvider,
    private store: Store<AppState>
  ) {
    this.registerForm = formBuilder.group(
      {
        displayName: ['', Validators.required],
        emailAddress: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        password: [
          '',
          Validators.compose([Validators.minLength(6), Validators.required]),
        ],
        confpassword: [
          '',
          Validators.compose([Validators.minLength(6), Validators.required]),
        ],
      },
      { validator: PasswordValidation.MatchPassword }
    );
  }

  // Lifecycle

  public ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.isStylist = this.navParams.get('isStylist');

    this.storage
      .getStorage('geolocation')
      .subscribe(res => (this.coords = res));
  }

  // Public
  public doRegister() {
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      user.homeLocation = this.coords;
      user.isStylist = this.navParams.get('isStylist');
      this.auth
        .doRegister(user, this.isStylist)
        .then(res => {
          console.log('User Registered : ' + JSON.stringify(res));
          if (user.isStylist) {
            this.navCtrl.push('StylistRegisterPage');
          } else {
            this.navCtrl.push('TabsPage', { isStylist: user.isStylist });
          }
        })
        .catch(err => {
          this.invalidReg = true;
          this.regError = err.message;
          console.error(err);
        });
    } else {
      // Error!
      this.store.dispatch(new RegisterErrorAction(this.registerForm.value));
      this.navCtrl.pop();
      // TODO: Show visual error message
    }
  }
  /**
   * Toggle password or text input
   *
   * @param input
   */
  public showPassword(input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
