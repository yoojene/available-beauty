import { Component, ViewChild } from '@angular/core';

// import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from '../home/home';
import { BookingsPage } from '../bookings/bookings';
import { StylistProfilePage } from '../stylist-profile/stylist-profile';
import { UserProfilePage } from '../user-profile/user-profile';

import { NavParams, NavController, Platform, IonicPage, Events, Tabs } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;

  showTabs: boolean;
  showkeyboard: boolean;

  tab1Root: any = HomePage;
  tab2Root: any = BookingsPage;
  tab3Root: any = StylistProfilePage;
  tab4Root: any = UserProfilePage;
  tab1Params = {id: 0};
  tab2Params = {id: 1};
  tab3Params = {id: 2, user: ''};
  tab4Params = {id: 3};

  constructor(
    private _platform: Platform,
    private navParams: NavParams,
    // private keyboard: Keyboard,
    private navCtrl: NavController,
    private events: Events
  ) {
    events.subscribe('change-stylist-profile-tab', (tab, id, param) => {
      this.tab3Params.id = id;
      this.tab3Params.user = param
      this.tabs.select(tab);
    });
  }

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
