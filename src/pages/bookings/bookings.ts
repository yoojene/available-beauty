import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingProvider } from '../../providers/booking/booking';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/concatMap';
import * as firebase from 'firebase';
import { AvailabilityProvider } from '../../providers/availability/availability';
import { StylistProvider } from '../../providers/stylist/stylist';
import { Stylist } from '../../model/stylist/stylist.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Availability } from '../../model/availability/availability.model';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {
  pendingBookingText = 'Pending Bookings';
  acceptedBookingText = 'Accepted Bookings';
  bookings$: Observable<any>;
  bookedavailbility$: Observable<any>;
  bookedStylist$: Observable<any>;

  bookedavailabilty: any;
  bookedstylist: any;
  bookeduser: any;
  mybookings = [];

  bookingTitle = 'Booking';
  stylistTitle = 'Stylist';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private book: BookingProvider,
    private avail: AvailabilityProvider,
    private stylist: StylistProvider,
    private user: UserProvider,
    private afdb: AngularFireDatabase
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }

  ionViewDidEnter() {
    // console.log('getting bookings');
    // TODO 16th Feb - This all needs to be rewritten with the new structure
    this.getBookings();
  }

  private getBookings() {
    console.log('gettttBookings');
    let uid = firebase.auth().currentUser.uid;

    console.log(uid);

    this.bookings$ = this.book.getUserBookings(uid);
    this.bookings$.subscribe(res => {
      console.log(res);
    });
  }
}
