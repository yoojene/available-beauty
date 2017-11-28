import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginBackgroundSliderPage } from '../pages/login-background-slider/login-background-slider';
import { LandingPage } from '../pages/landing/landing';
// import { Geolocation } from '@ionic-native/geolocation';
import { LocationProvider } from '../providers/location/location';


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
    private location: LocationProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.setGeoLocation();
    });
  }

  setGeoLocation(){
    this.location.watchGeoLocation()
  }

}
