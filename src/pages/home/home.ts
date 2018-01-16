import { Component } from '@angular/core';
import {
  NavController,
  IonicPage,
  ModalController,
  Events
} from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';
import { Stylist } from '../../model/stylist/stylist.model';
import { StorageProvider } from '../../providers/storage/storage';
import { SearchPage } from '../search/search';
import { User } from '../../model/users/user.model';
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lat: number;
  public long: number;
  private showMap: boolean = false;
  private mapButton: boolean = false;

  public stylists$: Observable<Stylist[]>;
  public users: User[];

  constructor(
    public navCtrl: NavController,
    private storage: StorageProvider,
    private stylist: StylistProvider,
    private user: UserProvider,
    private modalCtrl: ModalController,
    private events: Events,
    private utils: UtilsProvider
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
    this.storage.getStorage('geolocation').subscribe(res => {
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
    this.stylists$ = this.stylist.getStylists().valueChanges();
  }

  getUsers() {
    this.user
      .getUsers()
      .snapshotChanges()
      .subscribe(actions => {
        this.users = this.utils.generateFirebaseKeyedValues(actions);
      });
  }

  showSearch() {
    let searchModal = this.modalCtrl.create(SearchPage);

    searchModal.onDidDismiss(data => {
      console.log('dismissed ', data);
      this.getUsers();
    });

    searchModal.present();
  }

  openProfile(user) {
    console.log(user);
    this.events.publish('change-stylist-profile-tab', 2, 2, user);
  }
}
