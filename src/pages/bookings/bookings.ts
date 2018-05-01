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
import { Subject } from 'rxjs/Subject';
import { BookAvailabilityPage } from '../book-availability/book-availability';

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

  bookingTitle = 'Booking';
  stylistTitle = 'Stylist';

  stylist$: Observable<any>;
  stylistId: any;
  availabilities$: Observable<any>;
  availabilities: any = [];

  bookings$: Observable<any>;
  bookedavailbility$: Observable<any>;
  bookedStylist$: Observable<any>;

  bookingUsers: any = [];
  bookingUsers$: Observable<any>;

  bookedUsername: string;
  bookedDate: string;

  bookedDateAvailability: any = [];
  bookedUserAvailability: any = [];

  bookings = [];

  public destroy$: Subject<any> = new Subject();

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
    this.bookedUserAvailability = [];
    this.bookedDateAvailability = [];
    this.stylist
      .getStylist(firebase.auth().currentUser.uid)
      .snapshotChanges()
      .subscribe(res => {
        this.stylistId = res[0].key;
        this.getBookings(this.stylistId);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  // Public

  /**
   * Opens up UserProfile page in modal
   *t
   * @param {any} userId
   * @memberof BookingsPage
   */
  onBookingTap(availId, bookId) {
    const bookAvailModal = this.modalCtrl.create(BookAvailabilityPage, {
      availId: availId,
      bookId: bookId,
      stylist: this.stylistId,
      userId: firebase.auth().currentUser.uid,
    });

    bookAvailModal.onDidDismiss(data => {
      console.log('dismissed bookingAvailPageModal', data);
    });

    bookAvailModal.present();
  }

  // Private

  private getBookings(stylist) {
    console.log('gettttBookings => ', stylist);
    let uid = firebase.auth().currentUser.uid;

    this.bookings$ = this.book.getStylistBookings(stylist).snapshotChanges();

    this.bookings$.takeUntil(this.destroy$).subscribe(actions => {
      this.bookings = this.utils.generateFirebaseKeyedValues(actions);
      console.log('bookings ', this.bookings);

      this.bookings.forEach(i => {
        this.bookingUsers$ = this.user
          .getUserListById(i.userId)
          .snapshotChanges();

        this.availabilities$ = this.avail
          .getAvailabilityById(i.availabilityId)
          .snapshotChanges();

        this.bookingUsers$.takeUntil(this.destroy$).subscribe(res => {
          console.log(res);

          this.bookedUsername = this.utils.getFirebaseRealtimeDbKeyedValueById(
            res,
            'name'
          );

          this.bookedUserAvailability.push({
            availId: i.availabilityId,
            userName: this.bookedUsername,
          });

          console.log(this.bookedUserAvailability);
        });

        this.availabilities$.takeUntil(this.destroy$).subscribe(res => {
          console.log(res);
          let date = this.utils.getFirebaseRealtimeDbKeyedValueById(
            res,
            'datetime'
          );
          this.bookedDate = moment.unix(date).format('ddd Do MMM HH:mm');

          this.bookedDateAvailability.push({
            availId: i.availabilityId,
            bookedDate: this.bookedDate,
          });

          console.log(this.bookedDateAvailability);
        });
      });
    });
  }
}
