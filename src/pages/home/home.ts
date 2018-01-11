import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, Events } from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';
import { Stylist } from '../../model/stylist/stylist.model';
import { StorageProvider } from '../../providers/storage/storage';
import { SearchPage } from '../search/search';
import { User } from '../../model/users/user.model';

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
    private events: Events
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

    // this.users$ = this.user.getUsers().valueChanges();

    this.user.getUsers().snapshotChanges()
    .subscribe(actions => {

      let users = []

      // console.log(actions);
      actions.forEach(act => {

        let item = act.payload.val();
        item.key = act.key;
        // console.log(act.type)

        return users.push(item);

      })

      console.log(users)

      this.users = users;


    });

    // this.users$.subscribe(res => console.log(res));
  }

  showSearch() {
    let searchModal = this.modalCtrl.create(SearchPage);

    searchModal.onDidDismiss(data => {
      console.log('dismissed ', data);
      this.getUsers();
    });

    searchModal.present();
  }

  openProfile(user){
     this.events.publish('change-stylist-profile-tab', 2, 2, user);
  }


}
