import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the StylistProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stylist-profile',
  templateUrl: 'stylist-profile.html',
})
export class StylistProfilePage {

  id: number;
  stylist: any;
  toggled: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private events: Events) {
    this.id = navParams.get("id");
    this.stylist = navParams.get("stylist");

     events.subscribe("change-stylist-profile-tab", (tab, id, param) => {
       this.id = id;
       this.stylist = param;
     });

     console.log(this.stylist);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

  }

  toggleHeart() {
    if (!this.toggled){
      this.toggled = true;
      return;
    }
    this.toggled = false;
  }



}
