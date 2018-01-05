import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import firebase from 'firebase';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');

    this.getUserProfile();
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



  doLogOut() {
    this.afauth.auth.signOut();
  }
}
