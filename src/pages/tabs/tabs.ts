import { Component } from '@angular/core';

// import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from '../home/home';
import { BookingsPage } from '../bookings/bookings';
import { ProfilePage } from '../profile/profile';
// import { ResourcesPage } from '../resources/resources';
// import { SettingsPage } from '../settings/settings';
import { NavParams, NavController, Platform, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  showTabs: boolean;
  showkeyboard: boolean;

  tab1Root: any = HomePage;
  tab2Root: any = BookingsPage;
  tab3Root: any = ProfilePage;

  constructor(
    private _platform: Platform,
    private navParams: NavParams,
    // private keyboard: Keyboard,
    private navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    // this.keyboard.onKeyboardShow().subscribe(() => {
    //   this.showkeyboard = true;
    // });
    // this.keyboard.onKeyboardHide().subscribe(() => {
    //   this.showkeyboard = false;
    // });
    // Dynamically set the .mdi class to show the MD icon for Consultas
    // let parentnode = document.getElementById('tab-t0-1');
    // let childnode = parentnode.getElementsByClassName('tab-button-icon')[0];
    // childnode.className += ' mdi';
  }
}
