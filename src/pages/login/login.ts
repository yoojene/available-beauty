import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../model/app.state';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LoginAction, UserNotValidatedAction, LoginSuccessAction } from '../../model/auth/auth.actions';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({defaultHistory: ['LandingPage']})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm: any;

  constructor(public store: Store<AppState>,
              public formBuilder: FormBuilder,
              public navCtrl: NavController,
              public plt: Platform) {


    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: [
        '',
        Validators.compose([Validators.minLength(6), Validators.required])
      ]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.plt.platforms())
  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  doLogin() {
    if (!this.loginForm.valid) {
       this.store.dispatch(new UserNotValidatedAction({
         error: `Invalid or empty data`,
         // TODO Add visual error message on form
         }));

    } else {

      const userEmail = this.loginForm.value.email;
      const userPassword = this.loginForm.value.password;

      this.store.dispatch(new LoginAction({
        email: userEmail,
        password: userPassword,
        isNativeLogin: true
      }));

    }
  }

  doFacebookLogin() {

      this.store.dispatch(new LoginAction({
          isNativeLogin: false
        }));


  }

  openRegisterPage() {

    this.navCtrl.push('RegisterPage');
  }
}
