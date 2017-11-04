import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({defaultHistory: ["LandingPage"]})
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public loginForm: any;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController) {
    this.loginForm = formBuilder.group({
      email: ["", Validators.required],
      password: [
        "",
        Validators.compose([Validators.minLength(6), Validators.required])
      ]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  openResetPassword() {
    console.log("Reset password clicked");
  }

  doLogin() {
    if (!this.loginForm.valid) {
      this.navCtrl.push('HomePage');

      console.log("Invalid or empty data");
    } else {
      const userEmail = this.loginForm.value.email;
      const userPassword = this.loginForm.value.password;

      console.log("user data", userEmail, userPassword);
      this.navCtrl.push('HomePage');
    }
  }
}
