import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingProvider } from '../../providers/booking/booking';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html'
})
export class BookingsPage {
  bookings$: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private book: BookingProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }

  ionViewDidEnter() {
    console.log('getting bookings');
    this.getBookings();
  }

  private getBookings() {
    this.bookings$ = this.book.getBookings().valueChanges();
  }
}
