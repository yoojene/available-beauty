import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
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
import { StylistProfilePage } from '../stylist-profile/stylist-profile';

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

  itemExpandHeight: number = 300; // TODO: this needs to be dynamic based on device size

  public stylists$: Observable<Stylist[]>;
  public stylist$: Observable<any>;
  public stylistAvail$: Observable<any>; // TODO define interface for Availbility
  public availabilities: any;

  public users: User[];

  public destroy$: Subject<any> = new Subject();

  constructor(
    public navCtrl: NavController,
    private storage: StorageProvider,
    private stylist: StylistProvider,
    private user: UserProvider,
    private modalCtrl: ModalController,
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
    console.log('opent da modal');
    // this.events.publish('change-stylist-profile-tab', 1, 1, user);
    let profileModal = this.modalCtrl.create(StylistProfilePage, {
      user: user
    });

    profileModal.onDidDismiss(data => {
      console.log('dismissed stylistProfileModal', data);
    });

    profileModal.present();
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

            console.log(this.availabilities);

            this.availabilities.forEach(el => {
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
