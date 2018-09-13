import { Component, AfterContentInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  public userId: any;
  public review$: Observable<Review[]>;
  public user$: Observable<User>;
  public reviewUser: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private user: UserProvider
  ) {}

  public onViewDidLoad() {
    console.log('ionViewDidLoad StylistReviewPage');
  }

  public ionViewDidEnter() {}

  public ngAfterContentInit() {
    this.userId = this.navParams.get('userId');

    console.log(this.userId);
    this.getReviews(this.userId);
  }

  public getReviews(userId: any) {
    console.log(userId);
    this.review$ = this.user.getReviewByReceiver(userId).valueChanges();

    this.review$.subscribe(res => {
      console.log(res);
      res.forEach(el => {
        this.getReviewer(el.senderUid).subscribe(res => {
          // TODO need to unsub
          // TODO need to test how this works with different review users
          const userObj = res.payload.val();
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
