import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
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

  public getUserBookings(userId) {
    console.log('getUserBookings -> ', userId);
    return this.afdb.list(`bookings`, ref => {
      return ref.orderByChild('userId').equalTo(userId);
    });
  }

  public getStylistBookings(stylistId) {
    console.log('getStylistBookings -> ', stylistId);
    return this.afdb.list(`bookings`, ref => {
      return ref.orderByChild('stylistId').equalTo(stylistId);
    });
  }
  /**
   * Create /booking and update /availability booked to true
   *
   * @param {any} availId
   * @param {any} stylistId
   * @param {any} userId
   * @returns
   * @memberof BookingProvider
   */
  public makePendingBooking(availId, stylistId, userId) {
    console.log('makePendingBooking ');

    let bookingData = {
      availabilityId: availId,
      stylistId: stylistId,
      userId: userId,
      userAccepted: false,
      stylistAccepted: false,
    };

    let bookingKey = this.afdb.database
      .ref()
      .child(`/bookings`)
      .push().key;

    let bookingPayload = {};
    bookingPayload[`/bookings/${bookingKey}`] = bookingData;

    return this.afdb.database
      .ref()
      .update(bookingPayload)
      .then(() => {
        return bookingKey;
      });
  }

  public async stylistBookingAccept(bookingId) {
    return await this.afdb.database
      .ref(`bookings/${bookingId}`)
      .update({ stylistAccepted: true });
  }
}
