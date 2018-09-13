import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Slides,
  ViewController,
} from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Review } from '../../model/review/review.model';

/**
 * Generated class for the AddReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {
  @ViewChild(Slides)
  public slides: Slides;
  // tslint:disable-next-line:quotemark
  public pageSubheader = "Let's find out how the booking went..";
  public ratingTextHeader = 'Select a star rating';
  public reviewTextHeader = 'Enter some feedback for the Stylist';
  public reviewTextSubHeader =
    'What did you like? What went well? What could be improved?';
  public nextButtonText = 'Next';
  public submitButtonText = 'Finish';

  private stylistId: any;
  private availId: any;

  public review: Review;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public user: UserProvider
  ) {}

  // Lifecycle

  public ionViewDidLoad() {
    console.log('ionViewDidLoad AddReviewPage');

    console.log(this.navParams.data);

    this.stylistId = this.navParams.get('stylistId');
    this.availId = this.navParams.get('availId');

    console.log(this.stylistId); // Should refactor to Sender and Receiver from User and Stylist
  }

  // Public

  public onSlideChange(e) {
    console.log(this.slides.getActiveIndex());
  }

  public next() {
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext();
    this.slides.lockSwipeToNext(true);
  }

  public back() {
    this.slides.lockSwipeToPrev(false);
    this.slides.slidePrev();
    this.slides.lockSwipeToPrev(true);
  }

  public goBack() {
    this.viewCtrl.dismiss();
  }

  /**
   *
   * Emitted from StarRating component
   */
  public onRatingSelect(ev) {
    this.review.starRating = ev.total;
  }
  /**
   *
   * Submit review
   */
  public async onReviewSubmit() {
    this.review.receiverUid = this.stylistId;

    console.log(this.review);
    // TODO Do we want to associate the Review with the availability slot as well as the stylist? Send availability ID tp /reviews

    try {
      await this.user.addReview(
        this.stylistId,
        this.review.reviewText,
        this.review.starRating
      );
    } catch (err) {
      console.error(err);
    }
    this.viewCtrl.dismiss({ availId: this.availId, status: 'REVIEWED' });
  }
}
