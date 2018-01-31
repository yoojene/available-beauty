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
import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';

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

  itemExpandHeight: number = 150;

  public stylists$: Observable<Stylist[]>;
  public stylist$: Observable<any>;
  public stylistAvail$: Observable<any>; // TODO define interface for Availbility
  public availabilities: any;

  public users: User[];

  public destroy$: Subject<any> = new Subject();

  // Testing

  mockAvailabilities: any = [
    {
      booked: false,
      datetime: '1518604200'
    },
    {
      booked: false,
      datetime: '1518606000'
    },
    {
      booked: false,
      datetime: '1518607800'
    },
    {
      booked: false,
      datetime: 1518609600
    }
  ];

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

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.destroy$.next();
    this.destroy$.unsubscribe();
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
      .getStylistUsers()
      .snapshotChanges()
      .subscribe(actions => {
        let values = this.utils.generateFirebaseKeyedValues(actions);
        this.users = this.utils.addExpandedProperty(values);
        console.log(this.users);
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
    this.events.publish('change-stylist-profile-tab', 1, 1, user);
  }

  expandCard(user) {
    this.users.map(listItem => {
      if (user == listItem) {
        listItem.expanded = !listItem.expanded;
        console.log(user.key);

        this.stylist$ = this.stylist.getStylist(user.key).snapshotChanges();

        this.stylist$.subscribe(res => {
          console.log(res);
          console.log(res[0].key);
          this.stylistAvail$ = this.stylist
            .getStylistAvailability(res[0].key)
            .snapshotChanges();

          this.stylistAvail$.takeUntil(this.destroy$).subscribe(actions => {
            let avails = this.utils.generateFirebaseKeyedValues(actions);

            this.availabilities = avails.filter(res => res.booked === false);
            this.mockAvailabilities.forEach(el => {
              // let dateasint = parseInt(el.datetime);
              return (el.datetime = moment
                .unix(el.datetime)
                .format('ddd Do h:mm'));
            });
          });
        });
      } else {
        listItem.expanded = false;
        this.availabilities = null;
      }

      return listItem;
    });
  }
}
