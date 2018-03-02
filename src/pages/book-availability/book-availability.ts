import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { MessagesProvider } from '../../providers/messages/messages';
import * as firebase from 'firebase';
import * as moment from 'moment';

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
  chats: any;
  chatmsgs: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public msg: MessagesProvider
  ) {}

  ionViewDidEnter() {
    console.log('ionViewDidEnter BookAvailabilityPage');
    let params = this.navParams.get('avail');

    this.availableDate = params.datetime;

    let result = this.msg
      .getChatsForUser(firebase.auth().currentUser.uid) // TODO Need to account for when there is no /chat existing for user
      .mergeMap(res => this.msg.getMessagesForChat(res[0].key));

    result.subscribe((res: any) => {
      // res.sort((a, b) => {
      //   return a.messageDate - b.messageDate;
      // });
      res.forEach((el: any) => {
        return (el.messageDate = moment
          .unix(el.messageDate)
          .format('ddd Do MMM HH:mm'));
      });
      this.chatmsgs = res;
      console.log(this.chatmsgs);
    });

    // this.chatmsgs.forEach(chat => {
    //   return (chat.messageDate = moment
    //     .unix(chat.messageDate)
    //     .format('ddd Do MMM HH:mm'));
    // });
  }

  onSubmitBookForm() {
    console.log('submitted', this.bookMessage);
  }
}
