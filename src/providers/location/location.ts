import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Geolocation } from '@ionic-native/geolocation';
import { StorageProvider } from '../storage/storage';
import {
  NativeGeocoder,
  NativeGeocoderReverseResult,
  NativeGeocoderForwardResult,
} from '@ionic-native/native-geocoder';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {
  constructor(
    private geolocation: Geolocation,
    private storage: StorageProvider,
    private nativeGeocoder: NativeGeocoder
  ) {
    console.log('Hello LocationProvider Provider');
  }

  watchGeoLocation() {
    return this.geolocation
      .watchPosition()
      .filter(p => p.coords !== undefined)
      .subscribe(position => {
        console.log([position.coords.latitude, position.coords.longitude]);
        this.storage.setStorage('geolocation', [
          position.coords.latitude,
          position.coords.longitude,
        ]);
        return [position.coords.latitude, position.coords.longitude];
      });
  }

  getGeoLocation() {
    return this.geolocation
      .getCurrentPosition()
      .then(resp => {
        console.log([resp.coords.latitude, resp.coords.longitude]);
        this.storage.setStorage('geolocation', [
          resp.coords.latitude,
          resp.coords.longitude,
        ]);
        return [resp.coords.latitude, resp.coords.longitude];
      })
      .catch(err => console.error('Error getting location', err));
  }

  /**
   * Passes coordinates to Native Geocoder cordova plugin to get address
   *
   * @param {any} lat
   * @param {any} long
   * @returns
   * @memberof LocationProvider
   */
  public getAddressFromCoordinates(lat, long) {
    console.log('getAddressFromCoordinates');
    return this.nativeGeocoder
      .reverseGeocode(lat, long)
      .then((result: NativeGeocoderReverseResult) => {
        console.log(JSON.stringify(result));
        return result;
      })
      .catch((error: any) => console.error(error));
  }
  /**
   * Passes address to Native Geocoder cordova plugin to get coordinates
   *
   * @param {any} address
   * @returns
   * @memberof LocationProvider
   */
  public getCoordinatesFromAddress(address) {
    console.log('getCoordinatesFromAddress');
    return this.nativeGeocoder
      .forwardGeocode(address)
      .then((coordinates: NativeGeocoderForwardResult) => {
        return coordinates;
      })
      .catch((error: any) => console.error(error));
  }
}
