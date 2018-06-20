import { Component, ViewChild } from '@angular/core';

// import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from '../home/home';
import { BookingsPage } from '../bookings/bookings';
import { StylistProfilePage } from '../stylist-profile/stylist-profile';
import { UserProfilePage } from '../user-profile/user-profile';

import {
  NavParams,
  NavController,
  Platform,
  IonicPage,
  Events,
  Tabs,
} from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { AvailabilityPage } from '../availability/availability';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;

  showTabs: boolean;
  showkeyboard: boolean;

  tab1Root: any;
  tab1Title: any;
  tabTitle: any;
  tabIcon: any;
  tab1Icon: any;

  tab3Root: any = BookingsPage;
  tab4Root: any = UserProfilePage;
  tab1Params = { id: 0 };
  // tab2Params = { id: 1, user: '' };
  tab3Params = { id: 2 };
  tab4Params = { id: 3 };

  constructor(
    private _platform: Platform,
    private navParams: NavParams,
    // private keyboard: Keyboard,
    private navCtrl: NavController,
    private events: Events,
    private storage: StorageProvider
  ) {
    let param = navParams.get('isStylist');
    console.log(param);
    if (param) {
      this.tab1Root = AvailabilityPage;
      this.tab1Title = 'Availability';
      this.tabTitle = this.tab1Title;
      this.tab1Icon = 'calendar';
      this.tabIcon = this.tab1Icon;
    } else {
      this.tab1Root = HomePage;
      this.tab1Title = 'Search';
      this.tabTitle = this.tab1Title;
      this.tab1Icon = 'search';
      this.tabIcon = this.tab1Icon;
    }

    // events.subscribe('change-stylist-profile-tab', (tab, id, param) => {
    //   this.tab2Params.id = id;
    //   this.tab2Params.user = param;
    //   this.tabs.select(tab);
    // });
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
