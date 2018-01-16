import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';
import { AvailabilityProvider } from '../../providers/availability/availability';
import { AngularFireDatabase } from 'angularfire2/database';
import { Stylist } from '../../model/stylist/stylist.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { UtilsProvider } from '../../providers/utils/utils';
import { BookingProvider } from '../../providers/booking/booking';
/**
 * Generated class for the StylistProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stylist-profile',
  templateUrl: 'stylist-profile.html'
})
export class StylistProfilePage {
  availabilityHeader: string = 'Availability';
  bookText: string = 'Book';
  id: number;
  user: any;
  toggled: boolean = false;

  stylist$: Observable<any>;
  availability$: Observable<any>;
  availabilities: any;
  stylists: any;

  stylistId: any;

  selectedAvailability: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events,
    private stylist: StylistProvider,
    private afdb: AngularFireDatabase,
    private avail: AvailabilityProvider,
    private utils: UtilsProvider,
    private booking: BookingProvider
  ) {
    this.id = navParams.get('id');
    this.user = navParams.get('user');

    events.subscribe('change-stylist-profile-tab', (tab, id, param) => {
      this.id = id;
      this.user = param;
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ProfilePage');

    this.getStylistDetails(this.user.key);
  }
  /**
   * Get the stylist related to the user selected and the stylistId
   * Then get the availabilities for that StylistId
   *
   * @param {any} key
   * @memberof StylistProfilePage
   */
  getStylistDetails(key) {
    console.log(key);

    this.stylist$ = this.stylist.getStylist(key).valueChanges();

    console.log(this.stylist$);

    this.stylist
      .getStylist(key)
      .snapshotChanges()
      .subscribe(actions => {
        let stylists = this.utils.generateFirebaseKeyedValues(actions);

        console.log(stylists);

        this.stylists = stylists;
        this.stylistId = stylists[0].key;
        console.log(this.stylistId);

        this.avail
          .getAvailability(this.stylistId)
          .snapshotChanges()
          .subscribe(actions => {
            let avails = this.utils.generateFirebaseKeyedValues(actions);

            console.log(avails);
            this.availabilities = avails;
            this.availabilities.forEach(el => {
              return (el.datetime = moment
                .unix(el.datetime)
                .format('ddd Do h:mm'));
            });
          });
      });
  }

  toggleHeart() {
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
    this.booking.makeBooking(this.selectedAvailability);
  }

  // Events

  public onAvailSelected(ev) {
    console.log(ev);

    this.selectedAvailability = ev;
  }
}
