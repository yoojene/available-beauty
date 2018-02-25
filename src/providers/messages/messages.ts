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

  getMessageByRecipientId(uid) {
    return this.afdb.list('messages', ref => {
      return ref.orderByChild('recipientId').equalTo(uid);
    });
  }
}
