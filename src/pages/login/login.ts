import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../model/app.state';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LoginAction, UserNotValidatedAction, LoginSuccessAction } from '../../model/auth/auth.actions';

import { APP_TEST_CONFIG } from '../../config/app.test.config';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AuthProvider } from '../../providers/auth/auth';

@IonicPage({ defaultHistory: ['LandingPage'] })
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  public loginForm: any;

  constructor(
    public store: Store<AppState>,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    private modal: ModalController,
    public afAuth: AngularFireAuth,
    public auth: AuthProvider
  ) {
    this.loginForm = formBuilder.group({
      // email: ['', Validators.required],
      email: [APP_TEST_CONFIG.email, Validators.required],
      // password: [
      //   '',
      //   Validators.compose([Validators.minLength(6), Validators.required])
      // ]
      password: [
        APP_TEST_CONFIG.password,
        Validators.compose([Validators.minLength(6), Validators.required])
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  onLoginSubmit() {

    if (!this.loginForm.valid) {
      this.store.dispatch(
        new UserNotValidatedAction({
          error: `Invalid or empty data`
          // TODO Add visual error message on form
        })
      );
    } else {

      const userEmail = this.loginForm.value.email;
      const userPassword = this.loginForm.value.password;

      this.auth.doNativeLogin(userEmail, userPassword)
      .then((res) => {
        console.log(res);
        this.navCtrl.push('TabsPage');
      }, err =>  {
        console.error(err.code);
        console.error(err.message);
      });



    }
  }

  onFacebookTap() {
    // this.store.dispatch(
    //   new LoginAction({
    //     isNativeLogin: false
    //   })
    // );

    // const success = status => {console.log(status)};
    // window.cookies.clear((res) => console.log(res + ' cookies cleared!'));

    this.auth.doFacebookLogin()
    .then(res => {
      console.log(res);

      if (res.errorCode){
        throw new Error(res.errorMessage);
      }else{
        this.navCtrl.push('TabsPage');
      }

    }).catch(err => console.error(err));
  }

  onGoogleTap() {

    this.auth.doGoogleLogin()
    .then(res => {
      console.log(res);
    }).catch(err => console.error(err));

  }

  onTwitterTap() {

  }

  openRegisterPage() {
    let regModal = this.modal.create('RegisterPage');

    regModal.present();

    // this.navCtrl.push('RegisterPage');
  }
}
