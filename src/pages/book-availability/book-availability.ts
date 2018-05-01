import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { MessagesProvider } from '../../providers/messages/messages';
import * as firebase from 'firebase';
import * as moment from 'moment';
import { AvailabilityProvider } from '../../providers/availability/availability';
import { UtilsProvider } from '../../providers/utils/utils';
import { UserProfilePage } from '../user-profile/user-profile';
import { UserProvider } from '../../providers/user/user';
import { BookingProvider } from '../../providers/booking/booking';

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
  public acceptBookingText = 'Accept';
  public rejectBookingText = 'Reject';

  isStylist: boolean;
  availableDate: any;
  booking: any = {};

  messages$: Observable<any>;
  chats: any;
  chatmsgs: any = [];
  chatId: any;

  userId: string;
  stylistId: number;
  availability: any;
  bookingId: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public msg: MessagesProvider,
    public utils: UtilsProvider,
    public avail: AvailabilityProvider,
    private user: UserProvider,
    private bookingProvider: BookingProvider
  ) {}

  // Lifecycle

  ionViewWillEnter() {
    console.log('ionViewWillEnter ionViewWillEnter');

    this.user.checkIsStylist(firebase.auth().currentUser.uid).subscribe(res => {
      if (!res) {
        this.isStylist = false;
      } else {
        this.isStylist = true;
      }
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter BookAvailabilityPage');
    this.availability = this.navParams.get('availId');
    this.stylistId = this.navParams.get('stylist');
    this.userId = this.navParams.get('userId');
    this.bookingId = this.navParams.get('bookId');

    console.log(this.availability);
    console.log(this.stylistId);
    console.log(this.userId);
    console.log('bookingId is ', this.bookingId);

    this.avail
      .getAvailabilityById(this.availability)
      .snapshotChanges()
      .subscribe(res => {
        let date = this.utils.getFirebaseRealtimeDbKeyedValueById(
          res,
          'datetime'
        );
        this.availableDate = moment.unix(date).format('ddd Do MMM HH:mm');
      });

    /* 1.
          Check if current chat thread between user and stylist
          if not, then create /chat
          then create /message

          if is, then append /message to existing /chat/id/message

    */

    this.checkIsChatThread().subscribe(res => {
      console.log(res);
      if (!res) {
        this.msg.addChat(this.userId, this.stylistId, this.availability);
      } else {
        this.getChatThread(res);
      }
    });
  }

  private checkIsChatThread() {
    return this.msg
      .getChatsForAvailability(this.availability) // TODO Need to account for when there is no /chat existing for user
      .mergeMap(res => {
        console.log(res);
        if (res.length === 0) {
          return Observable.of(false);
        }
        this.chatId = res[0].key; // only taking the first /chat
        return Observable.of(this.chatId);
      });
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

  public async acceptBooking() {
    // If Stylist, set bookings/{bookingId}/stylistAccepted = true
    // If User, set bookings/{bookingId}/userAccepted = true

    if (this.isStylist) {
      const result = await this.bookingProvider.stylistBookingAccept(
        this.bookingId
      );

      console.log(result);
    }
  }
  public rejectBooking() {}
}
