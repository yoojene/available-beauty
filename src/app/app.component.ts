import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginBackgroundSliderPage } from '../pages/login-background-slider/login-background-slider';
import { LandingPage } from '../pages/landing/landing';
import { Geolocation } from "@ionic-native/geolocation";


@Component({
  templateUrl: "app.html"
})


export class MyApp {
  // rootPage: string = "TabsPage"; // This needs to be updated once logged in / registered to be TabsPage
  rootPage: string = "LandingPage"; // This needs to be updated once logged in / registered to be TabsPage

  lat: number;
  long: number;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private geolocation: Geolocation
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // this.getGeoLocation();
      });
  };


  getGeoLocation() {

    this.geolocation.getCurrentPosition()
      .then(resp => {
        this.lat = resp.coords.latitude;
        this.long = resp.coords.longitude;
        console.log(this.lat);
        console.log(this.long);

      })
      .catch(err => console.error("Error getting location", err));
  }

}
