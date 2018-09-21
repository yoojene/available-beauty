import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {
  Availability,
  AvailabilitySlot,
} from '../../model/availability/availability.model';
import * as moment from 'moment';
import { Moment } from 'moment';
import { Platform } from 'ionic-angular';

@Injectable()
export class AvailabilityProvider {
  constructor(private afdb: AngularFireDatabase, private plt: Platform) {
    console.log('Hello AvailabilityProvider Provider');
  }

  // New
  public getAvailabilityById(availId): AngularFireList<{}> {
    console.log(availId);

    return this.afdb.list(`/availability/${availId}`);
  }

  /**
   * Get availabilities for a stylist
   *
   * @paramstylistId
   */
  public getStylistAvailability(stylistId: any): AngularFireList<{}> {
    console.log(stylistId);

    return this.afdb.list('availability', ref => {
      return ref.orderByChild('stylistId').equalTo(stylistId);
    });
  }

  /**
   * Update /availability in realtime DB
   *
   * @param slot Unix time
   * @param stylistId
   */
  public setAvailabilityTaken(slot: number, stylistId: string) {
    console.log('setAvailabilityTaken');
    const availData = {
      stylistId: stylistId,
      datetime: slot,
      booked: false,
    };

    const availKey = this.afdb.database
      .ref()
      .child('/availability/')
      .push().key;

    const availPayload = {};
    availPayload[`/availability/${availKey}`] = availData;

    console.log(availPayload);

    return this.afdb.database
      .ref()
      .update(availPayload);
  }

  /**
   * Create stylist availability slots
   *
   * @param startTime - 8:30
   * @param format - HH:mm
   * @param interval - 30
   * @param unit -  m
   * @param slot number of slots (6) - 6 slots of 30m intervals
   * @param period one of morning, afternoon, evening
   */
  public generateAvailabilitySlots(
    startTime: Moment,
    format: string,
    interval: any,
    unit: string,
    slot: number,
    period: string
  ): AvailabilitySlot[] {
    const slots: AvailabilitySlot[] = [
      {
        date: startTime.format('ddd Do MMM'),
        time: startTime.format(format),
        epoch: startTime.unix(),
        disabled: false,
        period: period,
      },
    ];
    let loopInt = interval;
    for (let x = 1; x < slot; x++) {
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

  public getNumberOfAvailabilitySlots(stylistId : any){
    return this.afdb.object<number>(`userProfile/${stylistId}/availabilitySlots`);
  }

  public decreaseNumberOfSlot(stylistId  , numberOfSlots : number){
    this.afdb.object<number>(`userProfile/${stylistId}/availabilitySlots`).query
    .ref
    .transaction((slots => {
        return slots - numberOfSlots;
    }))
  }

  public getDefaultAvailableSlots(callback) {
    // native ionic-firebase plugin doesn't have a method to fetch values
    // from the firebase remote configuration, therefore we are resorting to
    // using the cordova plugin firebase which is only accessible if platform
    // is in Cordova. If platform is not cordopva, default slots will automatically be
    // set to 5, and if there are any errors default slot will be 5 as well.
    this.plt
      .ready()
      .then(src => {
        console.log('Source is ', src)
        if (src === 'cordova') {
          (<any>window).FirebasePlugin
            .getValue(
              'default_available_slots',
              value => {
                // call the call back and set the value to value
                callback(value);
              },
              error => {
                console.log('Error: ', error.message);
                // if there is no remote configuration for
                // default_available_slots, the default is 5
                callback(5);
              }
            )
        } else {
          // If not in cordova
          callback(5);
        }
      })
      .catch(error => {
        console.log('Error: ', error.message);
        // in case something happens
        callback(5);
      })
  }

}
