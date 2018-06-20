import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MessagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessagesProvider {
  private chatId: any;

  constructor(public afdb: AngularFireDatabase) {
    console.log('Hello MessagesProvider Provider');
  }

  // Public

  public checkIsChatThread(availId) {
    return this.getChatsForAvailability(availId) // TODO Need to account for when there is no /chat existing for user
      .mergeMap(res => {
        console.log(res);
        if (res.length === 0) {
          return Observable.of(false);
        }
        this.chatId = res[0].key; // only taking the first /chat
        return Observable.of(this.chatId);
      });
  }

  public getChatsForUser(uid) {
    return this.afdb
      .list('chats', ref => {
        return ref.orderByChild('userId').equalTo(uid);
      })
      .snapshotChanges();
  }

  public getChatsForUserStylist(uid, stylistUid) {
    return this.afdb
      .list('chats', ref => {
        return ref.orderByChild('userId').equalTo(uid);
      })
      .snapshotChanges()
      .mergeMap(() => {
        return this.afdb
          .list('chats', ref => {
            return ref.orderByChild('stylistId').equalTo(stylistUid);
          })
          .snapshotChanges();
      });
  }

  public getChatsForAvailability(availId) {
    console.log(availId);
    return this.afdb
      .list('chats', ref => {
        return ref.orderByChild('availabilityId').equalTo(availId);
      })
      .snapshotChanges();
  }

  public getMessagesForChat(key) {
    console.log(key);
    return this.afdb.list(`chats/${key}/messages`).valueChanges();
  }

  public addChat(userId, stylistId, availabilityId) {
    const chatData = {
      creationDate: moment().unix(),
      stylistId: stylistId,
      userId: userId,
      availabilityId: availabilityId,
    };

    const chatKey = this.afdb.database
      .ref()
      .child(`chats`)
      .push().key;

    const chatPayload = {};

    chatPayload[`chats/${chatKey}`] = chatData;

    return this.afdb.database
      .ref()
      .update(chatPayload)
      .then(res => console.log(res));
  }

  public addMessageForUser(chatId, msg) {
    let messageData = {
      messageDate: moment().unix(),
      messageSender: firebase.auth().currentUser.displayName,
      messageText: msg,
      senderUid: firebase.auth().currentUser.uid,
    };

    let msgKey = this.afdb.database
      .ref()
      .child(`chats/${chatId}/messages`)
      .push().key;

    let messagePayload = {};
    messagePayload[`chats/${chatId}/messages/${msgKey}`] = messageData;

    return this.afdb.database
      .ref()
      .update(messagePayload)
      .then(res => console.log(res));
  }
}
