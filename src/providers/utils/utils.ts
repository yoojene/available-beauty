import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilsProvider {
  constructor() {
    console.log('Hello UtilsProvider Provider');
  }
  /**
   * Firebase snapshotChanges() returns the attributes in object but not the key itself,
   * which this does
   * Ref: https://ilikekillnerds.com/2017/05/convert-firebase-database-snapshotcollection-array-javascript/
   *
   * @param {any} actions
   * @returns
   * @memberof UtilsProvider
   */
  public generateFirebaseKeyedValues(actions) {
    let returnArr = [];

    actions.forEach(act => {
      let item = act.payload.val();
      item.key = act.key;
      return returnArr.push(item);
    });

    return returnArr;
  }
  /**
   * Controls expanded-item component
   *
   * @param {any} keyedVals
   * @returns
   * @memberof UtilsProvider
   */
  public addExpandedProperty(keyedVals) {
    keyedVals.forEach(val => {
      val.expanded = false;
    });
    return keyedVals;
  }
}
