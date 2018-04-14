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
    console.log(returnArr);
    return returnArr;
  }

  /**
   * Helper method for getting values from `/someNode/{someId}` RTDB calls
   * .snapshotChanges() returns each attribute 'row' as an array of objects
   * This allows you to pass in the snapshotChanges object and the attribute/key you want to
   * get the value of
   *
   * @param {Array<any>} snapChangesData
   * @param {string} searchKey
   * @returns
   * @memberof UtilsProvider
   */
  public getFirebaseRealtimeDbKeyedValueById(
    snapChangesData: Array<any>,
    searchKey: string
  ) {
    let returnValue: any;

    returnValue = snapChangesData
      .filter(a => {
        return a.key === searchKey;
      })
      .map(a => {
        return a.payload.val();
      });
    return returnValue;
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
