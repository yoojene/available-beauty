import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  id: number;
  stylist: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private events: Events) {
    // console.log(this.navParams);
    this.id = navParams.get("id");
    this.stylist = navParams.get("stylist");

     events.subscribe("change-profile-tab", (tab, id, param) => {
       this.id = id;
       this.stylist = param;
     });

     console.log(this.stylist);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

  }



}
