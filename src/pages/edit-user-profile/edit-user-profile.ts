import { Component, AfterContentInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';
import * as firebase from 'firebase';
//import { UtilsProvider } from '../../providers/utils/utils';
//import { Observable } from 'rxjs/Observable';

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
export class EditUserProfilePage implements AfterContentInit {
  stylistId: any;
  stylistDetails: any;
  // @ViewChild('navBar') navbar: Navbar;

  editProfileTitle = 'Edit Profile';
  stylistName = 'Salon Name';
  address1Line = 'Address Line 1';
  address2Line = 'Address Line 1';
  addressTown = 'Town';
  addressCounty = 'County';
  addressPostcode = 'Postcode';
  bio = 'Bio';
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private stylist: StylistProvider,
    //private utils: UtilsProvider
  ) {

  }

  ngAfterContentInit() {

  }

  ionViewDidEnter() {
    console.log('getting stylistID from current user ' + firebase.auth().currentUser.uid);

    this.stylist
    .getStylist(firebase.auth().currentUser.uid)
    .snapshotChanges()
    .subscribe(res => {
      //let obj = { ...res[0] };
      //this.stylistDetails = obj;
      this.stylistId = res[0].key;
      this.getDetails(this.stylistId);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserProfilePage');
  }

  getDetails(stylistId: any) {

    console.log('getstylistprofile');
    this.stylist
      .getStylist(firebase.auth().currentUser.uid)
      .valueChanges()
      .subscribe(res => {
        console.log(res);
        let obj = { ...res[0] };
        this.stylistDetails = obj;

        console.log(obj);
      });

  }

  // ngAfterViewInit() {
  //   console.log('after view innniiiittt');
  //   console.log(this.navbar.setBackButtonText(''));
  // }
}
