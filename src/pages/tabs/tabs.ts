import { Component, ViewChild } from '@angular/core';

// import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from '../home/home';
import { BookingsPage } from '../bookings/bookings';
import { StylistProfilePage } from '../stylist-profile/stylist-profile';
import { UserProfilePage } from '../user-profile/user-profile';
import firebase from 'firebase';

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

  public showTabs: boolean;
  public showkeyboard: boolean;
  public hasRealProfile: boolean = false;
  public isStylist: boolean;
  public anonymousUser: boolean;

  public tab1Root: any;
  public tab1Title: any;
  public tabTitle: any;
  public tabIcon: any;
  public tab1Icon: any;

  public tab3Root: any = BookingsPage;
  public tab4Root: any = UserProfilePage;
  public tab1Params = { id: 0 };
  public tab3Params = { id: 2 };
  public tab4Params = { id: 3 };

  constructor(
    private _platform: Platform,
    private navParams: NavParams,
    // private keyboard: Keyboard,
    private navCtrl: NavController,
    private events: Events,
    private storage: StorageProvider
  ) {
    firebase.auth().onAuthStateChanged(e => {
      if (e.isAnonymous === true) {
        this.anonymousUser = true;
      } else {
        this.anonymousUser = false;
      }
    });
    this.isStylist = navParams.get('isStylist');
    if (this.isStylist) {
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
