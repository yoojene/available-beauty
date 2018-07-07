import { Component, AfterContentInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';
import { Observable } from 'rxjs/Observable';
import { Review } from '../../model/review/review.model';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../model/users/user.model';

/**
 * Generated class for the StylistReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stylist-review',
  templateUrl: 'stylist-review.html',
})
export class StylistReviewPage implements AfterContentInit {
  public stylistId: any;
  public review$: Observable<Review[]>;
  public user$: Observable<User>;
  public reviewUser: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private stylist: StylistProvider,
    private user: UserProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylistReviewPage');
  }

  ionViewDidEnter() {}

  ngAfterContentInit() {
    this.stylistId = this.navParams.get('stylistId');

    console.log(this.stylistId);
    this.getReviews(this.stylistId);
  }

  public getReviews(stylistId: any) {
    console.log(stylistId);
    this.review$ = this.stylist.getStylistReview(stylistId).valueChanges();

    this.review$.subscribe(res => {
      res.forEach(el => {
        this.getReviewer(el.senderUid).subscribe(res => {
          // TODO need to unsub
          // TODO need to test how this works with different review users
          let userObj = res.payload.val();
          userObj.uid = res.key;
          this.reviewUser = userObj;
        });
      });
    });
  }

  public getReviewer(uid): any {
    return this.user.getUserById(uid).snapshotChanges();
  }
}
