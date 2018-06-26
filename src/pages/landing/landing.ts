import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginBackgroundSliderPage } from '../login-background-slider/login-background-slider';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import * as firebase from 'firebase';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/man-studio-portrait-light-90764.jpeg',
    'assets/img/background/pexels-photo-556665_1.jpg',
    'assets/img/background/pexels-photo-97218_1.jpg',
  ];

  tourSlides: any = [
    {
      slideText: 'Find salons and beauty specialists available near to you',
    },
    {
      slideText: 'View recommendations, ratings and  reviews ',
    },
    {
      slideText: 'Get deals on the treatments you want',
    },
  ];

  lookingTitle = 'Looking for Beauty';
  offeringTitle = 'Offering Beauty';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  openPage(el) {
    console.log(el);
    const type = el._elementRef.nativeElement.name;

    if (type === 'Looking') {
      // this.nav.setNav('Tabs', { loginType: type});
      firebase.auth().signInAnonymously();
      this.navCtrl.setRoot('TabsPage', { loginType: type });
    } else {
      this.navCtrl.push('LoginPage', { loginType: type });
    }
  }
}
