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
  booking: any = {};
  // bookMessage: any;

  messages$: Observable<any>;
  chats: any;
  chatmsgs: any = [];
  chatId: any;

  userId: string;
  stylistId: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public msg: MessagesProvider
  ) {}

  // Lifecycle

  ionViewDidEnter() {
    console.log('ionViewDidEnter BookAvailabilityPage');
    const avail = this.navParams.get('avail');
    this.stylistId = this.navParams.get('stylist');
    this.userId = this.navParams.get('userId');
    this.availableDate = avail.datetime;

    // this.userId = firebase.auth().currentUser.uid;

    console.log(avail);
    console.log(this.stylistId);
    console.log(this.userId);

    /* 1.
          Check if current chat thread between user and stylist
          if not, then create /chat
          then create /message

          if is, then append /message to existing /chat/id/message

    */

    this.checkIsChatThread().subscribe(res => {
      console.log(res);
      if (!res) {
        this.msg.addChat(this.userId, this.stylistId, avail.key);
      } else {
        this.getChatThread(res);
      }
    });
  }

  private checkIsChatThread() {
    return (
      this.msg
        // .getChatsForUser(this.userId) // TODO Need to account for when there is no /chat existing for user
        .getChatsForUserStylist(this.userId, this.stylistId) // TODO Need to account for when there is no /chat existing for user
        .mergeMap(res => {
          console.log(res);
          if (res.length === 0) {
            return Observable.of(false);
          }
          this.chatId = res[0].key; // only taking the first /chat
          return Observable.of(this.chatId);
        })
    );
  }

  private getChatThread(chatId) {
    this.msg.getMessagesForChat(chatId).subscribe((res: any) => {
      res.sort((a, b) => {
        return a.messageDate - b.messageDate;
      });

      console.log(firebase.auth().currentUser.photoURL);
      // This works out whether to to use position = left or position = right and add that to the object,
      // based on who was the chat sender
      res.forEach((el: any, idx) => {
        el.position = 'right';

        if (idx > 0) {
          let prevUser = res[idx - 1].senderUid;
          let prevPos = res[idx - 1].position;

          console.log('prevUser', prevUser);
          console.log('prevPos', prevPos);
          console.log('currUser', el.senderUid);
          console.log('currPos', el.position);
          console.log('----------------------------------');
          prevUser !== el.senderUid && prevPos !== el.position
            ? (el.position = 'right')
            : (el.position = 'left');
        }

        return (
          el.position,
          (el.messageDate = moment
            .unix(el.messageDate)
            .format('ddd Do MMM HH:mm'))
        );
      });
      this.chatmsgs = res;
      console.log(this.chatmsgs);
    });
  }

  public onSubmitBookForm(e) {
    e.preventDefault();
    console.log('submitted', this.booking.bookMessage);
    this.msg.addMessageForUser(this.chatId, this.booking.bookMessage);
    this.booking.bookMessage = '';
  }
}
