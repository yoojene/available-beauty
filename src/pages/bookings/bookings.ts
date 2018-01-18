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
  templateUrl: 'bookings.html'
})
export class BookingsPage {
  bookings$: Observable<any>;
  bookedavailbility$: Observable<any>;
  bookedStylist$: Observable<any>;

  bookedavailabilty: any;
  bookedstylist: any;
  bookeduser: any;

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
    console.log('getting bookings');
    this.getBookings();
  }

  private getBookings() {
    console.log('getBookings');
    let uid = firebase.auth().currentUser.uid;

    /* TODO: I _really_ want to chain the observables like this.
    But as user can have 1>N bookings for an Stylist, and I can only pass a single
    value (availabilityId) to the availability node it seems in AngularFirebaseList,
    then having to loop through them and get the stylist details from the resulting
    subscription

    this.book
      .getUserBookings(uid)
      .valueChanges()
      .flatMap(res => {
        return (this.bookedavailbility$ = this.avail
          .getAvailabilityById(res) // res is an array of bookings
          .valueChanges());
      })
      .flatMap(res => {
        return (this.bookedStylist$ = this.stylist
          .getStylistById(res)
          .valueChanges());
      })
      .subscribe(res => console.log(res));
*/
    this.book
      .getUserBookings(uid)
      .valueChanges()
      .subscribe(res => {
        let availIds = [];

        // Parse out the availabilityIds from the bookings
        res.forEach(el => {
          return availIds.push(el.availabilityId);
        });

        // Ugh - iterate over the availabiltyIds and get the availabilites
        // Then for each of those, returned those that booked === true
        // Then return the stylistProfile for these
        // Got to be a better way!
        availIds.forEach(el => {
          return this.afdb
            .list<Availability>(`availability`, ref => {
              return ref.orderByKey().equalTo(el);
            })
            .valueChanges()
            .subscribe(res => {
              res.forEach(el => {
                if (el.booked === true) {
                  console.log('found booked');
                  this.bookedavailabilty = el;
                  return this.stylist
                    .getStylistById(el)
                    .valueChanges()
                    .subscribe(res => {
                      this.bookedstylist = res;

                      return this.user
                        .getUserById(res.userId)
                        .valueChanges()
                        .subscribe(res => {
                          console.log(res);
                          this.bookeduser = res;
                        });
                    });
                }
              });
            });
        });
      });
  }
}
