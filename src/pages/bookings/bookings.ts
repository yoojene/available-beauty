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
import { Availability } from '../../model/availability/availability.model';
import { UserProvider } from '../../providers/user/user';
import { UtilsProvider } from '../../providers/utils/utils';
import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';
import { BookAvailabilityPage } from '../book-availability/book-availability';
import { AddStylistReviewPage } from '../add-stylist-review/add-stylist-review';

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
  public pendingBookingText = 'Pending Bookings';
  public noPendingBookingText = 'No Pending Bookings';
  public acceptedBookingText = 'Accepted Bookings';
  public noAcceptedBookingText = 'No Accepted Bookings';
  public pastBookingsText = 'Past Bookings';

  public bookingTitle = 'Booking';
  public stylistTitle = 'Stylist';

  public stylist$: Observable<any>;
  public stylistId: any;
  public availabilities$: Observable<any>;
  public availabilities: any = [];

  public bookings$: Observable<any>;
  public bookedavailbility$: Observable<any>;
  public bookedStylist$: Observable<any>;

  public bookingUsers: any = [];
  public bookingUsers$: Observable<any>;

  public bookedUsername: string;
  public bookedDate: string;

  public bookedDateAvailability: any = [];
  public bookedUserAvailability: any = [];

  public bookings = [];

  public bookedAvailability: any = [];

  public isStylist = false;

  public isPast = false;

  public destroy$: Subject<any> = new Subject();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private book: BookingProvider,
    private avail: AvailabilityProvider,
    private stylist: StylistProvider,
    private user: UserProvider,
    private utils: UtilsProvider
  ) {}

  // Lifecycle

  public ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }

  public ionViewWillEnter() {
    console.log(' booking view will enter ');

    this.availabilities = [];
    this.bookingUsers = [];
    this.bookedUserAvailability = [];
    this.bookedDateAvailability = [];
    this.bookedAvailability = [];
    // TOOO this is all a bit of a mess.  Need a better way to find out if stylist or not, generally
    this.user.checkIsStylist(firebase.auth().currentUser.uid).subscribe(res => {
      console.log(res);

      if (!res) {
        this.isStylist = false;
      } else {
        this.isStylist = true;
      }

      if (this.isStylist) {
        this.stylist
          .getStylist(firebase.auth().currentUser.uid)
          .snapshotChanges()
          .subscribe(res => {
            this.stylistId = res[0].key;
            this.getBookings(this.stylistId, this.isStylist);
          });
      } else {
        console.log(firebase.auth().currentUser.uid);
        this.getBookings(firebase.auth().currentUser.uid, this.isStylist);
      }
    });
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  public ionViewWillLeave() {
    this.availabilities = [];
    this.bookingUsers = [];
    this.bookedUserAvailability = [];
    this.bookedDateAvailability = [];
    this.bookedAvailability = [];
  }

  // Public

  /**
   * Opens up BookAvailability page in modal, showing chat between user and stylist
   *
   */
  public onBookingTap(availId, bookId) {
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

  public onPastBookingTap(availId, bookId) {
    const reviewModal = this.modalCtrl.create(AddStylistReviewPage, {
      availId: availId,
      bookId: bookId,
      stylist: this.stylistId,
      userId: firebase.auth().currentUser.uid,
    });

    reviewModal.onDidDismiss(data => {
      console.log('dismissed AddStylistReview', data);
    });

    reviewModal.present();
  }

  // Private

  private getBookings(stylistOrUserId: any, isStylist: boolean) {
    console.log('gettttBookings => ', stylistOrUserId);
    // let uid = firebase.auth().currentUser.uid;
    if (isStylist) {
      this.bookings$ = this.book
        .getStylistBookings(stylistOrUserId)
        .snapshotChanges();
    } else {
      this.bookings$ = this.book
        .getUserBookings(stylistOrUserId)
        .snapshotChanges();
    }

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

          // console.log(this.bookedUserAvailability);
        });

        this.availabilities$.takeUntil(this.destroy$).subscribe(res => {
          let date = this.utils.getFirebaseRealtimeDbKeyedValueById(
            res,
            'datetime'
          );

          this.bookedDate = moment.unix(date).format('ddd Do MMM HH:mm');

          if (moment().unix() < date) {
            this.isPast = false;
          } else {
            this.isPast = true;
          }

          this.bookedDateAvailability.push({
            availId: i.availabilityId,
            bookedDate: this.bookedDate,
            isPast: this.isPast,
          });

          console.log('this.bookedDateAvailability');
          console.log(this.bookedDateAvailability);
        });
      });
    });
  }

  public checkBookingIsInPast(bookingDate) {
    if (bookingDate) {
      if (bookingDate < moment().unix()) {
        // booking in past
        return true;
      } else {
        return false;
      }
    }
  }
  public checkBookingIsInFuture(bookingDate) {
    if (bookingDate) {
      if (bookingDate > moment().unix()) {
        // booking in future
        return true;
      } else {
        return false;
      }
    }
  }
}
