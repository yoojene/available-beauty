import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Slides,
  ViewController,
} from 'ionic-angular';

/**
 * Generated class for the AddStylistReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-stylist-review',
  templateUrl: 'add-stylist-review.html',
})
export class AddStylistReviewPage {
  @ViewChild(Slides) public slides: Slides;
  public pageSubheader = "Let's find out how the booking went..";
  public ratingTextHeader = 'Select a star rating';
  public reviewTextHeader = 'Enter some feedback for the Stylist';
  public nextButtonText = 'Next';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  // Lifecycle

  public ionViewDidLoad() {
    console.log('ionViewDidLoad AddStylistReviewPage');
  }

  // Public

  public onSlideChange(e) {
    // console.log(e);

    console.log(this.slides.getActiveIndex());

    // this.activeSlideIdx = this.slides.getActiveIndex();
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
}
