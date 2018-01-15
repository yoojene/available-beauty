import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AvailabilityProvider {
  constructor(private afdb: AngularFireDatabase) {
    console.log('Hello AvailabilityProvider Provider');
  }

  getAvailabilities() {
    return this.afdb.list('availability');
  }

  getAvailability(stylistId) {
    return this.afdb.list(`availability`, ref => {
      console.log(ref);
      return ref.orderByChild('stylistId').equalTo(stylistId);
    });
  }
}
