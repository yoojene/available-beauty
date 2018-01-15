import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';
import { AvailabilityProvider } from '../../providers/availability/availability';
import { AngularFireDatabase } from 'angularfire2/database';
import { Stylist } from '../../model/stylist/stylist.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { UtilsProvider } from '../../providers/utils/utils';
/**
 * Generated class for the StylistProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stylist-profile',
  templateUrl: 'stylist-profile.html'
})
export class StylistProfilePage {
  availabilityHeader: string = 'Availability';
  bookText: string = 'Book';
  id: number;
  user: any;
  toggled: boolean = false;

  stylist$: Observable<any>;
  availability$: Observable<any>;
  availabilities: any;
  stylists: any;

  stylistId: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events,
    private stylist: StylistProvider,
    private afdb: AngularFireDatabase,
    private avail: AvailabilityProvider,
    private utils: UtilsProvider
  ) {
    this.id = navParams.get('id');
    this.user = navParams.get('user');

    events.subscribe('change-stylist-profile-tab', (tab, id, param) => {
      this.id = id;
      this.user = param;
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ProfilePage');

    this.getStylistDetails(this.user.key);
  }

  getStylistDetails(key) {
    console.log(key);

    this.stylist$ = this.stylist.getStylist(key).valueChanges();

    console.log(this.stylist$);

    this.stylist
      .getStylist(key)
      .snapshotChanges()
      .subscribe(actions => {
        // let stylists = [];

        // // console.log(actions);
        // actions.forEach(act => {
        //   let item = act.payload.val();
        //   item.key = act.key;
        //   // console.log(act.type)

        //   return stylists.push(item);
        // });

        let stylists = this.utils.generateFirebaseKeyedValues(actions);

        console.log(stylists);

        this.stylists = stylists;
        this.stylistId = stylists[0].key;
        console.log(this.stylistId);

        this.availability$ = this.avail
          .getAvailability(this.stylistId)
          .valueChanges();

        this.avail
          .getAvailability(this.stylistId)
          .valueChanges()
          .subscribe(res => {
            this.availabilities = res;
            this.availabilities.forEach(el => {
              return (el.datetime = moment
                .unix(el.datetime)
                .format('ddd Do h:mm'));
            });
            // this.availabilityDate = res[0].datetime;
          });
      });

    // this.stylist.getStylist(key).once('value', res => {
    //   console.log(res.val());
    // });

    // this.stylist$ = this.stylist.getStylist(key);

    // this.stylist$.subscribe(res => console.log(res));

    // this.stylist.getStylist()

    // const stylist$ = new Subject<string>();

    // const queryObs = stylist$.switchMap(style =>
    //   this.afdb.list<Stylist>('/stylistProfile', ref => ref.equalTo('userId')).valueChanges()
    // );

    // queryObs.subscribe(queriedItems => {
    //   console.log(queriedItems);
    // });

    // stylist$.next('userId');
  }

  toggleHeart() {
    if (!this.toggled) {
      this.toggled = true;
      return;
    }
    this.toggled = false;
  }
}
