import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';
import { Availability } from '../../model/availability/availability.model';
import { StylistProvider } from '../stylist/stylist';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Injectable()
export class AvailabilityProvider {
  constructor(
    private afdb: AngularFireDatabase,
    private stylist: StylistProvider
  ) {
    console.log('Hello AvailabilityProvider Provider');
  }

  getAvailabilities() {
    return this.afdb.list('availability');
  }

  getStylistAvailability(stylistId) {
    console.log(stylistId);
    return this.afdb.list(`availability`, ref => {
      console.log(ref);
      return ref.orderByChild('stylistId').equalTo(stylistId);
    });
  }

  getAvailabilityById(avail) {
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

  getBookedAvailability(avail) {
    console.log(avail);
    console.log(JSON.stringify(avail));

    let availIds = [];

    avail.forEach(el => {
      return availIds.push(el.availabilityId);
    });

    let result;
    availIds.forEach(el => {
      console.log(el);

      return (result = this.afdb.list(`availability`, ref => {
        return ref.orderByKey().equalTo(el);
      }));
    });

    console.log(result);
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
      datetime: slot, // need to convert to epoch
      booked: false
    };

    let availKey = this.afdb.database
      .ref()
      .child(`/stylistProfile/${stylistId}/availability`)
      .push().key;

    let availPayload = {};
    availPayload[
      `/stylistProfile/${stylistId}/availability/${availKey}`
    ] = availData;

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
  generateAvailabilitySlots(startTime, format, interval, unit, slot, period) {
    let slots = [
      {
        date: startTime.format('ddd Do MMM'),
        day: startTime.format(format),
        disabled: false,
        period: period
      }
    ];
    let loopInt = interval;
    for (let x = 0; x < slot; x++) {
      slots.push({
        date: startTime.format('ddd Do MMM'),
        day: moment(startTime)
          .add(loopInt, unit)
          .format(format),
        disabled: false,
        period: period
      });
      loopInt = loopInt + interval;
    }
    // console.log(slots);
    return slots;
  }
}
