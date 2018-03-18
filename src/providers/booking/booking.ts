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
    // return this.afdb.list<Booking>(`booking`, ref => {
    //   console.log(ref);
    //   return ref.orderByChild('userId').equalTo(uid);
    // });
    console.log(uid);
    return this.afdb
      .list<Booking>(`userProfile/${uid}/bookings`)
      .snapshotChanges();
  }
  /**
   * Create /booking and update /availability booked to true
   *
   * @param {any} availId
   * @param {any} userId
   * @returns
   * @memberof BookingProvider
   */
  public makePendingBooking(availId, userId) {
    console.log('makePendingBooking ');
    let bookingData = {
      availabilityId: availId,
      userAccepted: false,
      stylistAccepted: false,
    };

    let bookingKey = this.afdb.database
      .ref()
      .child(`userProfile/${userId}/bookings`)
      .push().key;

    let bookingPayload = {};
    bookingPayload[`userProfile/${userId}/bookings/${bookingKey}`] = bookingData;

    return this.afdb.database
      .ref()
      .update(bookingPayload)
      .then(res => console.log(res));
  }
}
