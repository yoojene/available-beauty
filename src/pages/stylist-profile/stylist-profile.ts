import { Component, OnDestroy } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  ModalController,
} from 'ionic-angular';
import { AvailabilityProvider } from '../../providers/availability/availability';
import { AngularFireDatabase } from 'angularfire2/database';
import { Stylist } from '../../model/stylist/stylist.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import * as firebase from 'firebase';
import { UtilsProvider } from '../../providers/utils/utils';
import { BookingProvider } from '../../providers/booking/booking';
import { LoginPage } from '../login/login';
import { BookAvailabilityPage } from '../book-availability/book-availability';
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
export class StylistProfilePage implements OnDestroy {
  public availabilityHeader = 'Availability';
  public bookText = 'Book';
  public id: number;
  public user: any;
  public toggled = false;
  private bookingId: string;
  public uid = firebase.auth().currentUser.uid;

  public availability$: Observable<any>;
  public availabilities: any;
  public stylists: any;

  public stylistId: any;

  public selectedAvailability: any;
  public destroy$: Subject<any> = new Subject();

  private anonymousUser = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private booking: BookingProvider,
    private modalCtrl: ModalController
  ) {
    this.user = navParams.get('user');
  }

  public ionViewDidEnter() {
    console.log('ionViewDidEnter ProfilePage');

    // if (this.user) {
    //   this.getStylistDetails(this.user.key);
    // }
  }

  public ngOnDestroy() {
    console.log('ngOnDestroy');
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  public toggleHeart() {
    if (!this.toggled) {
      this.toggled = true;

      return;
    }
    this.toggled = false;
  }

  public doBooking() {
    /***Make booking
      1.) create /booking entry
      2.) mark given /availability booked = true
    ****/
    // this.booking.makeBooking(this.selectedAvailability);
  }

  // Events

  public onAvailSelected(ev) {
    console.log(ev);

    this.selectedAvailability = ev;
  }

  public async bookAvailability(avail) {
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
}
