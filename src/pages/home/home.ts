import { Component } from '@angular/core';
import {
  NavController,
  IonicPage,
  ModalController,
  ToastController,
} from 'ionic-angular';
import { Http } from '@angular/http';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';
import { StorageProvider } from '../../providers/storage/storage';
import { SearchProvider } from '../../providers/search/search';
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
import { FcmProvider } from '../../providers/fcm/fcm';
import { SkillsProvider } from '../../providers/skills/skills';
import { LoginPage } from '../login/login';
import { FindAvailabilityPage } from '../find-availability/find-availability';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public availabilityHeader = 'Availability';
  public servicesText = 'Services';
  public noAvailabilitiesText = 'No Availability';
  public reviewsText = 'reviews';
  public lat: number;
  public long: number;
  public toggled = false;
  public showMap = false;
  public mapButton = false;

  public itemExpandHeight = 100; // TODO: this needs to be dynamic based on device size

  public stylistReviews: number;
  public stylistAvail$: Observable<any>; // TODO define interface for Availbility
  public availabilities: any;

  private anonymousUser = true;
  private selectedTreatment = '';
  private selectedDate = '';

  /**
   * /userProfile key for a give /stylistProfile
   */
  public stylistUserId: number;

  public users: User[];

  public uid = firebase.auth().currentUser.uid;

  public destroy$: Subject<any> = new Subject();

  public beautyOptions: any;

  public todayText = 'Today';
  public tomorrowText = 'Tomorrow';
  public thisWeekText = 'This week';

  public dateOptions: any = [
    {
      name: this.todayText,
    },
    {
      name: this.tomorrowText,
    },
    {
      name: this.thisWeekText,
    },
  ];

  constructor(
    public navCtrl: NavController,
    private storage: StorageProvider,
    private avail: AvailabilityProvider,
    private user: UserProvider,
    private modalCtrl: ModalController,
    private utils: UtilsProvider,
    private booking: BookingProvider,
    private search: SearchProvider,
    public fcm: FcmProvider,
    public toastCtrl: ToastController,
    public http: Http,
    private skills: SkillsProvider
  ) {}

  // Lifecycle
  public ionViewDidLoad() {
    this.getGeoLocation();
    this.showSearch('');

    firebase.auth().onAuthStateChanged(e => {
      if (e.isAnonymous === true) {
        this.anonymousUser = true;
      } else {
        this.anonymousUser = false;
      }
    });

    //  PHILIP LEAPER - removed below due to error

    // this.fcm
    //   .listenToNotifications()
    //   .pipe(
    //     tap(msg => {
    //       console.log('msg');
    //       console.log(msg);
    //       const toast = this.toastCtrl.create({
    //         message: msg.body,
    //         duration: 3000,
    //       });
    //       toast.present();
    //     })
    //   )
    //   .subscribe();

    //Get skills from /skills
    console.log('skills: ' + this.skills.getSkillGroups());

    this.skills
      .getSkillGroups()
      .snapshotChanges()
      .subscribe(res => {
        this.beautyOptions = res;
      });
  }

  public ngOnDestroy() {
    console.log('ngOnDestroy');
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  // Public

  public toggleMap() {
    if (!this.showMap) {
      this.showMap = true;
    } else {
      this.showMap = false;
    }
  }

  public showSearch(ev: any) {
    console.log(ev);

    /* Using Firebase Search function */
    //  was using ev.target.value - removed because we are no longer searching terms
    this.getUsers('').subscribe(res => {
      console.log(res._body);
      console.log(JSON.parse(res._body));
      this.users = JSON.parse(res._body);
    });

    /*  Just query RTDB for users
    this.getUsers();*/
  }

  public treatmentSearch(ev: any) {
    console.log(ev);
    this.selectedTreatment = this.beautyOptions[ev].key;

    /* Using Firebase Search function */
    //  was using ev.target.value - removed because we are no longer searching terms
    this.getUsers('').subscribe(res => {
      console.log(res._body);
      console.log(JSON.parse(res._body));
      this.users = JSON.parse(res._body);
    });

    /*  Just query RTDB for users
    this.getUsers();*/
  }

  public dateSearch(ev: any) {
    console.log(ev);

    this.selectedDate = this.dateOptions[ev].name;

    /* Using Firebase Search function */
    //  was using ev.target.value - removed because we are no longer searching terms
    this.getUsers('').subscribe(res => {
      console.log(res._body);
      console.log(JSON.parse(res._body));
      this.users = JSON.parse(res._body);
    });

    /*  Just query RTDB for users
    this.getUsers();*/
  }

  public openProfile(user) {
    console.log(user);
    // console.log('opent da modal');
    // const profileModal = this.modalCtrl.create(StylistProfilePage, {
    //   user: user,
    // });

    // profileModal.onDidDismiss(data => {
    //   console.log('dismissed stylistProfileModal', data);
    // });

    // profileModal.present();

    this.navCtrl.push(StylistProfilePage, { user: user });
  }

  public openReviews(userId: any) {
    const reviewModal = this.modalCtrl.create(StylistReviewPage, {
      userId: userId,
    });

    reviewModal.onDidDismiss(data => {
      console.log('dismissed stylistReviewModal', data);
    });

    reviewModal.present();
  }

  public onSkillsTap(user: any) {
    console.log(user);
    this.users.map(listItem => {
      if (user === listItem) {
        listItem.skillsExpanded = !listItem.skillsExpanded;
      }
    });
  }

  public expandCard(user: any, index: any) {
    this.users.map(listItem => {
      if (user === listItem) {
        listItem.availsExpanded = !listItem.availsExpanded;
        console.log(user);
        this.stylistUserId = user.key;

        this.stylistAvail$ = this.avail
          .getStylistAvailability(user.key)
          .snapshotChanges();

        this.stylistAvail$.takeUntil(this.destroy$).subscribe(actions => {
          const avails = this.utils.generateFirebaseKeyedValues(actions);

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
              (el.origdatetime = el.datetime) &&
              (el.day = moment.unix(el.datetime).format('ddd Do')) &&
              (el.month = moment.unix(el.datetime).format('MMM')) &&
              (el.datetime = moment
                .unix(el.datetime)
                .format('ddd Do MMM HH:mm'))
            );
          });
        });
        // });
      } else {
        listItem.availsExpanded = false;
        this.availabilities = null;
      }

      return listItem;
    });
  }

  public toggleFavourite() {
    if (!this.toggled) {
      this.toggled = true;

      return;
    }
    this.toggled = false;
  }

  public doTestFCM() {
    this.fcm.getToken();
  }

  public onAvailabilityTap(user: any) {
    this.navCtrl.push(FindAvailabilityPage, { user: user });
  }

  // Private

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

  private getUsers(term?: any) {
    /* Uncomment to use search function*/

    console.log('treatment=' + this.selectedTreatment);
    console.log('date=' + this.selectedDate);

    /*let selectedTreatment = '';
    let selectedDate = '';
    if (this.beautyOptions[treatment].key) {
      selectedTreatment = this.beautyOptions[treatment].key;
      console.log('treatment=' + selectedTreatment);
    }
    if (this.dateOptions[date].name) {
      selectedDate = this.dateOptions[date].name;
      console.log('date=' + selectedDate);
    }*/
    return this.search.search(
      term,
      this.lat,
      this.long,
      100,
      this.selectedTreatment,
      this.selectedDate
    );

    /* This is the direct call to the RTDB
    this.user
      .getStylistUsers()
      .snapshotChanges()
      .subscribe(actions => {
        const values = this.utils.generateFirebaseKeyedValues(actions);
        this.users = this.utils.addExpandedProperty(values);
        console.log(this.users);
      });*/
  }
}
