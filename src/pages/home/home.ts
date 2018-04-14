import { Component } from '@angular/core';
import {
  NavController,
  IonicPage,
  ModalController,
  AlertController,
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
import { StylistProfilePage } from '../stylist-profile/stylist-profile';
import { StylistReviewPage } from '../stylist-review/stylist-review';
import { BookingProvider } from '../../providers/booking/booking';
import { BookAvailabilityPage } from '../book-availability/book-availability';
import * as firebase from 'firebase';
import { AvailabilityProvider } from '../../providers/availability/availability';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public availabilityHeader = 'Availability';
  public noAvailabilitiesText = 'No Availability';
  public reviewsText = 'Reviews >';
  public lat: number;
  public long: number;
  public toggled: boolean = false;
  private showMap: boolean = false;
  private mapButton: boolean = false;

  itemExpandHeight: number = 400; // TODO: this needs to be dynamic based on device size

  public stylist$: Observable<any>;
  public stylistReviews: number;
  public stylistAvail$: Observable<any>; // TODO define interface for Availbility
  public availabilities: any;
  /**
   * /stylistProfile key
   *
   * @type {number}
   * @memberof HomePage
   */
  public stylistId: number;

  /**
   * /userProfile key for a give /stylistProfile
   *
   * @type {number}
   * @memberof HomePage
   */
  public stylistUserId: number;

  public users: User[];

  public uid = firebase.auth().currentUser.uid;

  private bookingId: string;

  public destroy$: Subject<any> = new Subject();

  constructor(
    public navCtrl: NavController,
    private storage: StorageProvider,
    private stylist: StylistProvider,
    private avail: AvailabilityProvider,
    private user: UserProvider,
    private modalCtrl: ModalController,
    private utils: UtilsProvider,
    private alertCtrl: AlertController,
    private booking: BookingProvider
  ) {}

  ionViewDidLoad() {
    this.getGeoLocation();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  //-- Public

  public toggleMap() {
    if (!this.showMap) {
      this.showMap = true;
    } else {
      this.showMap = false;
    }
  }

  public showSearch(ev: any) {
    console.log(ev);

    this.getUsers();
    // let searchModal = this.modalCtrl.create(SearchPage);

    // searchModal.onDidDismiss(data => {
    //   console.log('dismissed ', data);

    // });

    // searchModal.present();
  }

  public openProfile(user) {
    console.log(user);
    console.log('opent da modal');
    let profileModal = this.modalCtrl.create(StylistProfilePage, {
      user: user,
    });

    profileModal.onDidDismiss(data => {
      console.log('dismissed stylistProfileModal', data);
    });

    profileModal.present();
  }

  public openReviews(stylistId: any) {
    let reviewModal = this.modalCtrl.create(StylistReviewPage, {
      stylistId: stylistId,
    });

    reviewModal.onDidDismiss(data => {
      console.log('dismissed stylistReviewModal', data);
    });

    reviewModal.present();
  }

  public expandCard(user: any) {
    this.users.map(listItem => {
      if (user == listItem) {
        listItem.expanded = !listItem.expanded;

        this.stylistUserId = user.key;

        this.stylist$ = this.stylist
          .getStylist(this.stylistUserId)
          .snapshotChanges();

        this.stylist$.subscribe(res => {
          this.stylistId = res[0].key;

          this.stylistAvail$ = this.avail
            .getStylistAvailability(res[0].key)
            .snapshotChanges();

          this.stylist
            .getStylistReview(res[0].key)
            .valueChanges()
            .subscribe(res => (this.stylistReviews = res.length));

          this.stylistAvail$.takeUntil(this.destroy$).subscribe(actions => {
            let avails = this.utils.generateFirebaseKeyedValues(actions);

            this.availabilities = avails.filter(res => res.booked === false);

            this.availabilities.sort((a, b) => {
              return a.datetime - b.datetime;
            });

            this.availabilities = this.availabilities.filter(el => {
              return el.datetime >= moment().unix();
            });

            console.log('filtered availabilities rrrrr');
            console.log(this.availabilities);

            this.availabilities.forEach(el => {
              // TODO group availabilities by day / month and display
              return (
                (el.day = moment.unix(el.datetime).format('ddd Do')) &&
                (el.month = moment.unix(el.datetime).format('MMM')) &&
                (el.datetime = moment
                  .unix(el.datetime)
                  .format('ddd Do MMM HH:mm'))
              );
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

  public bookAvailability(avail) {
    // Make pending booking
    this.booking
      .makePendingBooking(avail.key, this.stylistId, this.uid)
      .then(res => (this.bookingId = res));

    let bookingModal = this.modalCtrl.create(BookAvailabilityPage, {
      availId: avail.key,
      stylist: this.stylistId,
      userId: this.uid,
    });

    bookingModal.onDidDismiss(data => {
      console.log('dismissed bookAvailabilityModal', data);
    });

    bookingModal.present();
  }

  public toggleFavourite() {
    if (!this.toggled) {
      this.toggled = true;
      return;
    }
    this.toggled = false;
  }

  //--- Private

  private getGeoLocation() {
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

  private getUsers() {
    this.user
      .getStylistUsers()
      .snapshotChanges()
      .subscribe(actions => {
        const values = this.utils.generateFirebaseKeyedValues(actions);
        this.users = this.utils.addExpandedProperty(values);
        console.log(this.users);
      });
  }
}
