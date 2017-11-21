import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public lat: number;
  public long: number;
  private showMap: boolean = false;
  private mapButton: boolean = false;

  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation
  )
  {}

  ionViewDidLoad() {
    this.getGeoLocation();
  }



  toggleMap() {
    if (!this.showMap) {
      this.showMap = true;
    } else {
      this.showMap = false;
    }

  }

  getGeoLocation() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.lat = resp.coords.latitude;
        this.long = resp.coords.longitude;

        this.mapButton = true;

        console.log(this.lat);
        console.log(this.long);
      })
      .catch(err => console.error("Error getting location", err));
  }
}
