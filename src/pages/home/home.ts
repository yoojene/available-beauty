import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { StylistProvider } from "../../providers/stylist/stylist";
import { Observable } from 'rxjs/Observable';
import { Stylist } from '../../model/stylist/stylist.model';
import { StorageProvider } from '../../providers/storage/storage';

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

  private stylists$: Observable<Stylist[]>;

  constructor(
    public navCtrl: NavController,
    private storage: StorageProvider,
    private stylist: StylistProvider
  ) {}

  ionViewDidLoad() {
    this.getGeoLocation();
  }

  toggleMap() {
    if (!this.showMap) {
      this.getStylists();
      this.showMap = true;
    } else {
      this.showMap = false;
    }
  }

  getGeoLocation() {
    this.storage.getStorage('geolocation')
    .subscribe(res => {
      console.log(res);
      if (res){
        this.lat = res[0];
        this.long = res[1];
        console.log(this.lat)
        console.log(this.long)
        this.mapButton = true;
      }
    });
  }

  getStylists() {
    this.stylists$ = this.stylist.getStylists();
  }
}
