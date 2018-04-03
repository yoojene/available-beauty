import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
} from 'ionic-angular';
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
import { UtilsProvider } from '../../providers/utils/utils';
import * as moment from 'moment';
import { UserProfilePage } from '../user-profile/user-profile';

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
  noPendingBookingText = 'No Pending Bookings';
  acceptedBookingText = 'Accepted Bookings';
  noAcceptedBookingText = 'No Accepted Bookings';
  bookings$: Observable<any>;
  bookedavailbility$: Observable<any>;
  bookedStylist$: Observable<any>;

  stylist$: Observable<any>;
  stylistId: any;
  availabilities$: Observable<any>;
  availabilities: any = [];
  bookingUsers: any = [];
  bookingUsers$: Observable<any>;

  bookedavailabilty: any;
  bookedstylist: any;
  bookeduser: any;
  mybookings = [];

  bookingTitle = 'Booking';
  stylistTitle = 'Stylist';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private book: BookingProvider,
    private avail: AvailabilityProvider,
    private stylist: StylistProvider,
    private user: UserProvider,
    private afdb: AngularFireDatabase,
    private utils: UtilsProvider
  ) {}

  // Lifecycle

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }

  ionViewDidEnter() {
    this.availabilities = [];
    this.bookingUsers = [];
    console.log('getting bookings');
    // TODO 16th Feb - This all needs to be rewritten with the new structure

    this.stylist
      .getStylist(firebase.auth().currentUser.uid)
      .snapshotChanges()
      .subscribe(res => {
        this.stylistId = res[0].key;
        this.getBookings(this.stylistId);
      });
  }

  // Public
  
  /**
   * Opens up UserProfile page in modal
   *
   * @param {any} userId
   * @memberof BookingsPage
   */
  onBookingTap(userId) {
    const profileModal = this.modalCtrl.create(UserProfilePage, {
      user: userId,
    });

    profileModal.onDidDismiss(data => {
      console.log('dismissed stylistProfileModal', data);
    });

    profileModal.present();
  }

  // Private

  private getBookings(stylist) {
    console.log('gettttBookings => ', stylist);
    let uid = firebase.auth().currentUser.uid;

    this.bookings$ = this.book.getStylistBookings(stylist).snapshotChanges();

    this.bookings$.subscribe(res => {
      console.log('bookings sub ', res);

      res.forEach(i => {
        this.avail
          .getAvailabilityById(this.stylistId, i.payload.val().availabilityId)
          .snapshotChanges()
          .subscribe(res => {
            console.log('getAvailabilityByIdssss');
            console.log(res);

            this.availabilities.push({
              availId: i.payload.val().availabilityId,
              booked: res[0].payload.val(), // TODO need to filter these like the userList below
              datetime: moment.unix(res[1].payload.val()).format('ddd Do MMM'), // TODO and this
            });

            console.log(this.availabilities);
          });

        this.user
          .getUserListById(i.payload.val().userId)
          .snapshotChanges()
          .subscribe(res => {
            console.log(res);

            let name = res.filter(i => {
              return i.key === 'name';
            });
            let emailAddress = res.filter(i => {
              return i.key === 'emailAddress';
            });
            // console.log(name);
            // console.log(emailAddress);
            // console.log(name[0].payload.val());
            // console.log(emailAddress[0].payload.val());

            this.bookingUsers.push({
              userId: i.payload.val().userId,
              name: name[0].payload.val(),
              emailAddress: emailAddress[0].payload.val(),
            });

            // console.log(this.bookingUsers);
          });
      });
    });
  }
}
