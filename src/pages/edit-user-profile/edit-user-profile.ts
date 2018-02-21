import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

/**
 * Generated class for the EditUserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-user-profile',
  templateUrl: 'edit-user-profile.html',
})
export class EditUserProfilePage {
  // @ViewChild('navBar') navbar: Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserProfilePage');
  }

  // ngAfterViewInit() {
  //   console.log('after view innniiiittt');
  //   console.log(this.navbar.setBackButtonText(''));
  // }
}
