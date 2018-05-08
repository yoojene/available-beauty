import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { Booking, BookingStatus } from '../../model/booking/booking.model';
import * as moment from 'moment';

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

  public getBookingById(bookingId) {
    return this.afdb.list(`bookings/${bookingId}`);
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
  public makePendingBooking(availId, availDate, stylistId, userId) {
    console.log('makePendingBooking ');

    let bookingData = {
      availabilityId: availId,
      bookedAvailSlot: availDate,
      stylistId: stylistId,
      userId: userId,
      status: BookingStatus.pending,
    };

    let bookingKey = this.afdb.database
      .ref()
      .child(`/bookings`)
      .push().key;

    let bookingPayload = {};
    bookingPayload[`/bookings/${bookingKey}`] = bookingData;

    console.log(bookingPayload);

    return this.afdb.database
      .ref()
      .update(bookingPayload)
      .then(() => {
        return bookingKey;
      });
  }

  public async doBookingStatusChange(bookingId, status) {
    return await this.afdb.database
      .ref(`bookings/${bookingId}`)
      .update({ status: status });
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
