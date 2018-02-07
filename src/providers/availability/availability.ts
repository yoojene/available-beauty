import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';
import { Availability } from '../../model/availability/availability.model';
import { StylistProvider } from '../stylist/stylist';
import { Observable } from 'rxjs/Observable';

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
}
