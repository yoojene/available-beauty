import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the MessagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessagesProvider {
  constructor(public afdb: AngularFireDatabase) {
    console.log('Hello MessagesProvider Provider');
  }

  getChatsForUser(uid) {
    return this.afdb
      .list('chats', ref => {
        return ref.orderByChild('userId').equalTo(uid);
      })
      .snapshotChanges();
  }

  getMessagesForChat(key) {
    console.log(key);
    return this.afdb.list(`chats/${key}/messages`).valueChanges();
  }

  getMessagesByAvailability(stylistId, availabilityId) {
    return this.afdb.list(
      `stylistProfile/${stylistId}/availability/${availabilityId}/messages`
    );
  }
}
