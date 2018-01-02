import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, Events } from 'ionic-angular';
import { StylistProvider } from "../../providers/stylist/stylist";
import { Observable } from 'rxjs/Observable';
import { Stylist } from '../../model/stylist/stylist.model';
import { StorageProvider } from '../../providers/storage/storage';
import { SearchPage } from '../search/search';

import { AngularFireAuth } from 'angularfire2/auth';


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
    private stylist: StylistProvider,
    private modalCtrl: ModalController,
    private events: Events,
    private afauth: AngularFireAuth
  ) {}

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
    this.storage.getStorage("geolocation").subscribe(res => {
      console.log(res);
      if (res) {
        this.lat = res[0];
        this.long = res[1];
        console.log(this.lat);
        console.log(this.long);
        this.mapButton = true;
      }
    });
  }

  getStylists() {
    this.stylists$ = this.stylist.getStylists();
  }

  showSearch() {
    let searchModal = this.modalCtrl.create(SearchPage);

    searchModal.onDidDismiss(data => {
      console.log("dismissed ", data);
      this.getStylists();
    });

    searchModal.present();
  }

  openProfile(stylist){
     this.events.publish("change-profile-tab", 2, 2, stylist);
  }

  doLogOut() {
    this.afauth.auth.signOut()
  }

}
