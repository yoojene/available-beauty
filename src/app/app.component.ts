import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginBackgroundSliderPage } from '../pages/login-background-slider/login-background-slider';
import { LandingPage } from '../pages/landing/landing';
import { LocationProvider } from '../providers/location/location';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAction } from 'angularfire2/database/interfaces';
import { StorageProvider } from '../providers/storage/storage';

@Component({
  templateUrl: 'app.html'
})
export class AvailableBeautyApp {
  @ViewChild('#myNav') nav: NavController;
  rootPage: string = 'LandingPage'; // This needs to be updated once logged in / registered to be TabsPage
  stylistParam: any;

  lat: number;
  long: number;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private location: LocationProvider,
    private afAuth: AngularFireAuth,
    private storage: StorageProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.watchGeoLocation();
      this.checkAuthState();
    });
  }

  watchGeoLocation() {
    this.location.watchGeoLocation();
  }

  checkAuthState() {
    console.log('checking auth state....');
    this.afAuth.authState.subscribe(res => {
      if (!res) {
        // Unauthenticated state
        this.rootPage = 'LandingPage';
      } else {
        // let stylistObs = this.storage.getStorage('isStylist');

        // let stylistRegObs = this.storage.getStorage('stylistRegistered');

        // stylistObs.flatMap(res => stylistRegObs).subscribe(res => {
        //   console.log(res);
        // }
        // Check if is Stylist or User
        this.storage.getStorage('isStylist').subscribe(res => {
          console.log(res);
          if (!res) {
            console.log(res);
            this.rootPage = 'LookingPage';
          } else {
            this.storage.getStorage('stylistRegistered').subscribe(reg => {
              console.log(reg);
              if (reg) {
                this.rootPage = 'TabsPage';
                // this.nav.setRoot('TabsPage', {
                //   isStylist: true
                // });
              } else {
                this.rootPage = 'StylistRegisterPage';
              }
            });
          }
        });
      }
    });
  }
}
