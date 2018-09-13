import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login-background-slider',
  templateUrl: 'login-background-slider.html',
})
export class LoginBackgroundSliderPage {
  public backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg',
  ];
  public loginForm: any;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: [
        '',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
    });
  }

  public ionViewDidLoad() {
    console.log('Hello LoginBackgroundSlider Page');
  }

  public openResetPassword() {
    console.log('Reset password clicked');
  }

  public doLogin() {
    if (!this.loginForm.valid) {
      this.navCtrl.push(HomePage);
      console.log('Invalid or empty data');
    } else {
      const userEmail = this.loginForm.value.email;
      const userPassword = this.loginForm.value.password;

      console.log('user data', userEmail, userPassword);
      this.navCtrl.push(HomePage);
    }
  }
}
