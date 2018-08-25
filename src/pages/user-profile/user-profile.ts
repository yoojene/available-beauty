import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import firebase from 'firebase';
import { SettingsPage } from '../settings/settings';
import { StorageProvider } from '../../providers/storage/storage';

import { EditUserProfilePage } from '../edit-user-profile/edit-user-profile';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  editProfileText = 'Edit Profile';
  name: string;
  email: string;

  user: any;
  isStylist: boolean;
  stylist$: any;
  style: any;

  hideOnModal = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afauth: AngularFireAuth,
    private modalCtrl: ModalController,
    private storage: StorageProvider
  ) {}

  ionViewWillEnter() {
    console.log('ionViewDidLoad UserProfilePage');

    const user = this.navParams.get('user');

    console.log(user);

    if (user) {
      this.hideOnModal = false;
    } else {
      this.hideOnModal = true;
    }

    console.log('hideOnModal  ', this.hideOnModal);

    this.getUserProfile(user);
    this.storage.getStorage('isStylist').subscribe(res => {
      if (res) {
        this.isStylist = true;
      } else {
        this.isStylist = false;
      }
    });
  }

  //-- Public

  public doEditProfile() {
    console.log('editing PRofile');
    let editProfileModal = this.modalCtrl.create(EditUserProfilePage);

    editProfileModal.onDidDismiss(data => {
      console.log('dismissed ', data);
    });

    editProfileModal.present();
  }

  public doOpenSettings() {
    let settingsModal = this.modalCtrl.create(SettingsPage);

    settingsModal.onDidDismiss(data => {
      console.log('dismissed ', data);
    });

    settingsModal.present();
  }

  public doLogOut() {
    console.log('sign out valled');
    this.afauth.auth.signOut();
  }

  //-- Private

  private getUserProfile(user?) {
    // TODO Make this dynamic with userId passed in from navParams
    console.log(this.afauth.auth.currentUser.uid);
    console.log(user);
    let userId;
    if (user) {
      userId = user;
    } else {
      userId = this.afauth.auth.currentUser.uid;
    }

    firebase
      .database()
      .ref('/userProfile')
      .child(userId)
      .once('value')
      .then(res => {
        console.log(res.val());

        this.user = res.val();
      });
  }
}
