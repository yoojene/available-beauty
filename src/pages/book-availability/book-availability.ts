import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookAvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-availability',
  templateUrl: 'book-availability.html',
})
export class BookAvailabilityPage {
  availableDate: any;
  bookMessage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAvailabilityPage');
    let params = this.navParams.get('avail');

    this.availableDate = params.datetime;
  }

  onSubmitBookForm() {
    console.log('submitted', this.bookMessage);
  }
}
