import { Component } from '@angular/core';
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
export class StylistReviewPage {
  public stylistId: any;
  public review$: Observable<Review[]>;
  public user$: Observable<User>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private stylist: StylistProvider,
    private user: UserProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylistReviewPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter StylistReviewPage');
    this.stylistId = this.navParams.get('stylistId');

    console.log(this.stylistId);
    this.getReviews(this.stylistId);
  }

  public getReviews(stylistId: any) {
    console.log(stylistId);
    this.review$ = this.stylist.getStylistReview(stylistId).valueChanges();

    this.review$.subscribe(res => {
      console.log(res);
      res.forEach(el => {
        this.user$ = this.getReviewer(el.userId);
        console.log(this.user$);
        return this.user$;
      });
    });
  }

  public getReviewer(review): any {
    return this.user.getUserById(review.userId).valueChanges();
  }
}
