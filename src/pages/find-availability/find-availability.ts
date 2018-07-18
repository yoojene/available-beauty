import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  Scroll,
} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AvailabilityProvider } from '../../providers/availability/availability';
import { UtilsProvider } from '../../providers/utils/utils';
import { Subject } from '../../../node_modules/rxjs/Subject';
import * as moment from 'moment';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';
import { BookingProvider } from '../../providers/booking/booking';
import { BookAvailabilityPage } from '../book-availability/book-availability';
import { Moment } from 'moment';

/**
 * Generated class for the FindAvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-availability',
  templateUrl: 'find-availability.html',
})
export class FindAvailabilityPage {
  @ViewChild(Scroll) dateScroll: Scroll;

  public findAvailabilityTitle = 'Select Availability Slot';
  public noAvailabilitiesText = 'No Availability';

  public stylistAvail$: Observable<any>; // TODO define interface for Availbility
  public destroy$: Subject<any> = new Subject();
  public availabilities: any;
  public stylistUserId: any;

  private bookingId: string;
  public uid = firebase.auth().currentUser.uid;
  private anonymousUser = true;

  // public dateScroll;
  public viewDate: Moment = moment();
  public dates: any[] = [];
  public today = moment().format('Do MM YYYY');

  private user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public avail: AvailabilityProvider,
    public utils: UtilsProvider,
    private booking: BookingProvider,
    private modalCtrl: ModalController
  ) {}

  // Lifecycle

  public ionViewDidLoad() {
    console.log('ionViewDidLoad FindAvailabilityPage');

    firebase.auth().onAuthStateChanged(e => {
      if (e.isAnonymous === true) {
        this.anonymousUser = true;
      } else {
        this.anonymousUser = false;
      }
    });
    this.dateScroll.addScrollEventListener(this.onDateScroll);
    this.user = this.navParams.get('user');

    console.log(this.user);
    this.buildCalendar();
  }

  // ion-scroll handler
  public onDateScroll(event) {
    // console.log(event);
    // this.dates
    // console.log(this.dates);
  }

  public getAvailability(user: any, date: Moment) {
    console.log(user);
    console.log(date);
    this.stylistUserId = user.key;

    this.stylistAvail$ = this.avail
      .getStylistAvailability(user.key)
      .snapshotChanges();

    // this.stylist
    //   .getStylistReview(user.key)
    //   .valueChanges()
    //   .subscribe(res => (this.stylistReviews = res.length));

    this.stylistAvail$.takeUntil(this.destroy$).subscribe(actions => {
      const avails = this.utils.generateFirebaseKeyedValues(actions);

      this.availabilities = avails.filter(res => res.booked === false);

      this.availabilities.sort((a, b) => {
        return a.datetime - b.datetime;
      });

      this.availabilities = this.availabilities.filter(el => {
        return el.datetime >= moment().unix();
      });

      this.availabilities = this.availabilities.filter(el => {
        return moment
          .unix(el.datetime)
          .isBetween(moment(date).startOf('day'), moment(date).endOf('day'));
      });

      console.log('filtered availabilities');
      console.log(this.availabilities);

      this.availabilities.forEach(el => {
        // TODO group availabilities by day / month and display
        return (
          (el.origdatetime = el.datetime) &&
          (el.day = moment.unix(el.datetime).format('ddd Do')) &&
          (el.month = moment.unix(el.datetime).format('MMM')) &&
          (el.datetime = moment.unix(el.datetime).format('ddd Do MMM HH:mm'))
        );
      });
    });
  }

  private async bookAvailability(avail) {
    if (this.anonymousUser) {
      return this.navCtrl.push(LoginPage, { isStylist: false });
    }
    // Make pending booking
    const result = await this.booking.makePendingBooking(
      avail.key,
      avail.origdatetime,
      avail.stylistId,
      this.uid
    );

    this.bookingId = result;

    const bookingModal = this.modalCtrl.create(BookAvailabilityPage, {
      availId: avail.key,
      stylist: avail.stylistId,
      userId: this.uid,
      bookId: this.bookingId,
    });

    bookingModal.onDidDismiss(data => {
      console.log('dismissed bookAvailabilityModal', data);
    });

    bookingModal.present();
  }

  public buildCalendar() {
    let interval = 1;
    let loopIdx = interval;
    for (let x = 0; x < 365; x++) {
      // console.log(loopIdx);
      this.dates.push({
        date: moment(this.viewDate).add(loopIdx, 'day'),
        weekday: moment(this.viewDate)
          .add(loopIdx, 'day')
          .format('DD-MMM-YYYY'),
      });
      loopIdx += interval;
    }
  }

  public onDateTap(date) {
    this.getAvailability(this.user, date.date);
  }

  public onAvailSelected(avail) {
    console.log(avail);

    this.bookAvailability(avail);
  }
  public onRadioTapped(avail) {
    console.log(avail);
  }
}
