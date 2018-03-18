import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';
import {
  Availability,
  AvailabilitySlot,
} from '../../model/availability/availability.model';
import { StylistProvider } from '../stylist/stylist';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { Moment } from 'moment';

@Injectable()
export class AvailabilityProvider {
  constructor(
    private afdb: AngularFireDatabase,
    private stylist: StylistProvider
  ) {
    console.log('Hello AvailabilityProvider Provider');
  }

  // Legacy
  getAvailabilities() {
    return this.afdb.list('availability');
  }
  // Legacy
  getStylistAvailability(stylistId) {
    console.log(stylistId);
    return this.afdb.list(`availability`, ref => {
      console.log(ref);
      return ref.orderByChild('stylistId').equalTo(stylistId);
    });
  }
  // Legacy
  getOldAvailabilityById(avail) {
    console.log('calling getAvailabilityById()');
    console.log(avail);
    console.log(JSON.stringify(avail));

    let availIds = [];
    // let availList$;
    avail.forEach(el => {
      return availIds.push(el.availabilityId);
    });

    let availList$;

    availIds.forEach(el => {
      console.log(el);

      availList$ = this.afdb
        .list<Availability>(`availability`, ref => {
          return ref.orderByKey().equalTo(el);
          // .orderByChild('booked')
          // .equalTo(true);
        })
        .valueChanges()
        .subscribe(res => {
          console.log(res);
          res.forEach((el: any) => {
            console.log(el);
            console.log(el.booked);
            if (el.booked === true) {
              console.log('found booked');
              return this.stylist.getStylistById(el);
              // return availList$;
            }
          });
        });
    });

    console.log(availList$);
    return availList$;
  }

  // New

  getAvailabilityById(stylistId, availId) {
    console.log(stylistId);
    console.log(availId);
    return this.afdb.list(
      `/stylistProfile/${stylistId}/availability/${availId}`
    );
  }

  // New RTDB format
  getBookedAvailability(stylistId: any) {
    console.log(stylistId);
    console.log(`/stylistProfile/${stylistId}/availability`);
    return this.afdb.list(`/stylistProfile/${stylistId}/availability`);
  }

  /**
   * Update /availability in realtime DB
   *
   * @param {number} slot Unix time
   * @param {string} stylistId
   * @returns
   * @memberof AvailabilityProvider
   */
  setAvailabilityTaken(slot: number, stylistId: string) {
    console.log('setAvailabilityTaken');
    let availData = {
      datetime: slot,
      booked: false,
    };

    let availKey = this.afdb.database
      .ref()
      .child(`/stylistProfile/${stylistId}/availability`)
      .push().key;

    let availPayload = {};
    availPayload[
      `/stylistProfile/${stylistId}/availability/${availKey}`
    ] = availData;

    console.log(availPayload);

    return this.afdb.database
      .ref()
      .update(availPayload)
      .then(res => console.log(res));
  }
  /**
   * Create stylist availability slots
   *
   * @param {any} startTime - 8:30
   * @param {any} format - HH:mm
   * @param {any} interval - 30
   * @param {any} unit -  m
   * @param {any} slot number of slots (6) - 6 slots of 30m intervals
   * @param {any} period one of morning, afternoon, evening
   * @memberof AvailabilityProvider
   */
  generateAvailabilitySlots(
    startTime: Moment,
    format: string,
    interval: any,
    unit: string,
    slot: number,
    period: string
  ) {
    // moment(option.date + ' ' + option.time, 'ddd Do MMM HH:mm').unix();
    let slots: AvailabilitySlot[] = [
      {
        date: startTime.format('ddd Do MMM'),
        time: startTime.format(format),
        epoch: startTime.unix(),
        disabled: false,
        period: period,
      },
    ];
    let loopInt = interval;
    for (let x = 0; x < slot; x++) {
      slots.push({
        date: startTime.format('ddd Do MMM'),
        time: moment(startTime)
          .add(loopInt, unit)
          .format(format),
        epoch: moment(startTime)
          .add(loopInt, unit)
          .unix(),
        disabled: false,
        period: period,
      });
      loopInt = loopInt + interval;
    }
    return slots;
  }
}
