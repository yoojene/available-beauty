import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';
import { AngularFireDatabase } from 'angularfire2/database';
import { Stylist } from '../../model/stylist/stylist.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

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
  id: number;
  user: any;
  toggled: boolean = false;

  stylist$: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events,
    private stylist: StylistProvider,
    private afdb: AngularFireDatabase
  ) {
    this.id = navParams.get('id');
    this.user = navParams.get('user');

    events.subscribe('change-stylist-profile-tab', (tab, id, param) => {
      this.id = id;
      this.user = param;
      console.log(this.user);
    });

    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

    this.getStylistDetails(this.user.key);
  }

  getStylistDetails(key) {
    console.log(key);

    this.stylist$ = this.stylist.getStylist(key).valueChanges();

    console.log(this.stylist$);

    this.stylist$.subscribe(res => console.log(res));

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
