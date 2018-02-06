import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Booking } from '../../model/booking/booking.model';

@Injectable()
export class BookingProvider {
  constructor(private afdb: AngularFireDatabase) {
    console.log('Hello BookingProvider Provider');
  }

  /**
   * Get all /bookings
   *
   * @returns
   * @memberof BookingProvider
   */

  public getBookings() {
    return this.afdb.list('booking');
  }

  public getUserBookings(uid) {
    return this.afdb.list<Booking>(`booking`, ref => {
      console.log(ref);
      return ref.orderByChild('userId').equalTo(uid);
    });
  }
  /**
   * Create /booking and update /availability booked to true
   *
   * @param {any} availId
   * @returns
   * @memberof BookingProvider
   */
  public makeBooking(availId) {
    let bookingData = {
      availabilityId: availId,
      userId: firebase.auth().currentUser.uid
    };

    let bookingKey = this.afdb.database
      .ref()
      .child('booking')
      .push().key;

    let bookingPayload = {};
    bookingPayload[`/booking/${bookingKey}`] = bookingData;
    // bookingPayload[`/availability/${availId}/booked`] = true;

    return this.afdb.database
      .ref()
      .update(bookingPayload)
      .then(res => console.log(res));
  }
}
