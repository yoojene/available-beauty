import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import firebase from 'firebase';
import { SettingsPage } from '../settings/settings';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {
  name: string;
  email: string;

  user: any;
  isStylist: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afauth: AngularFireAuth,
    private modalCtrl: ModalController,
    private storage: StorageProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');

    this.getUserProfile();
    this.storage.getStorage('isStylist').subscribe(res => {
      if (res) {
        this.isStylist = true;
      } else {
        this.isStylist = false;
      }
    });
  }

  getUserProfile() {
    console.log(this.afauth.auth.currentUser.uid);

    firebase
      .database()
      .ref('/userProfile')
      .child(this.afauth.auth.currentUser.uid)
      .once('value')
      .then(res => {
        console.log(res.val());

        this.user = res.val();
      });
  }

  doOpenSettings() {
    let settingsModal = this.modalCtrl.create(SettingsPage);

    settingsModal.onDidDismiss(data => {
      console.log('dismissed ', data);
    });

    settingsModal.present();
  }

  doLogOut() {
    console.log('sign out valled');
    this.afauth.auth.signOut();
  }
}
