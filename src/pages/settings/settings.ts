import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  settingsTitle = 'Settings';
  notificationsLabel = 'Notifications';
  termsLabel = 'Terms of Service';
  logOutLabel = 'Log Out';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afauth: AngularFireAuth,
    private viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  doLogOut() {
    this.viewCtrl.dismiss();
    this.afauth.auth.signOut();
  }
}
