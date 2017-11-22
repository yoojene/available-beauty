import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Geolocation } from "@ionic-native/geolocation";

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {
  constructor(
              private geolocation: Geolocation
            ) {
    console.log("Hello LocationProvider Provider");
  }

  watchGeoLocation() {

    return this.geolocation
      .watchPosition()
      .filter(p => p.coords !== undefined)
      .subscribe(position => {
        //this.storage.set("geolat", position.coords.latitude);
        //this.storage.set("geolong", position.coords.longitude);
        console.log([position.coords.latitude, position.coords.longitude])
        return [position.coords.latitude, position.coords.longitude]
      });
  }


  getGeoLocation() {

    return this.geolocation
      .getCurrentPosition()
      .then(resp => {

        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);

        console.log([resp.coords.latitude, resp.coords.longitude]);
        return [resp.coords.latitude, resp.coords.longitude];
      })
      .catch(err => console.error("Error getting location", err));

  }

}


