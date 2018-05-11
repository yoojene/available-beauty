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
import { StylistProvider } from '../providers/stylist/stylist';
import { UserProvider } from '../providers/user/user';
import { FcmProvider } from '../providers/fcm/fcm';

@Component({
  templateUrl: 'app.html',
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
    private stylist: StylistProvider,
    private location: LocationProvider,
    private afAuth: AngularFireAuth,
    private storage: StorageProvider,
    private user: UserProvider,
    public fcm: FcmProvider
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
        const uid = res.uid;
        this.fcm.getToken();
        // Check if is Stylist or User
        this.user.checkIsStylist(uid).subscribe(res => {
          if (!res) {
            this.rootPage = 'LookingPage';
          } else {
            this.stylist
              .getStylist(uid)
              .valueChanges()
              .subscribe(res => {
                console.log(res);
                if (res && res.length > 0) {
                  // Has a stylistProfile
                  this.rootPage = 'AvailabilityPage';
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
