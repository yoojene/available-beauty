import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { MessagesProvider } from '../../providers/messages/messages';
import * as firebase from 'firebase';

/**
 * Generated class for the BookAvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-availability',
  templateUrl: 'book-availability.html',
})
export class BookAvailabilityPage {
  availableDate: any;
  bookMessage: any;

  messages$: Observable<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public msg: MessagesProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAvailabilityPage');
    let params = this.navParams.get('avail');

    this.availableDate = params.datetime;

    this.messages$ = this.msg
      .getMessageByRecipientId(firebase.auth().currentUser.uid)
      .valueChanges();
    // .subscribe(res => console.log(res));
  }

  onSubmitBookForm() {
    console.log('submitted', this.bookMessage);
  }
}
