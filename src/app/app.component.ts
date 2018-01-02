import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginBackgroundSliderPage } from '../pages/login-background-slider/login-background-slider';
import { LandingPage } from '../pages/landing/landing';
import { LocationProvider } from '../providers/location/location';

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireAction } from 'angularfire2/database/interfaces';



@Component({
  templateUrl: "app.html"
})
export class AvailableBeautyApp {
  // rootPage: string = 'TabsPage'; // This needs to be updated once logged in / registered to be TabsPage
  rootPage: string = "LandingPage"; // This needs to be updated once logged in / registered to be TabsPage

  lat: number;
  long: number;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private location: LocationProvider,
    private afAuth: AngularFireAuth
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.setGeoLocation();
      this.checkAuthState();
    });
  }

  setGeoLocation(){
    this.location.watchGeoLocation()
  }

  checkAuthState() {
    console.log('checking auth state....')
    this.afAuth.authState
    .subscribe(res => {

      console.log(res);
      if (res) {
        // Nav to homepage
        this.rootPage = 'LookingPage';
      } else {
        // Login page
        this.rootPage = 'LandingPage'
      }

    });

  }
}
