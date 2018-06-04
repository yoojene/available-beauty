import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {
  constructor(
    public firebaseNative: FCM,
    public afdb: AngularFireDatabase,
    public platform: Platform
  ) {
    console.log('Hello FcmProvider Provider');
  }

  public async getToken() {
    let token;

    console.log(this.platform);

    if (this.platform.is('cordova')) {
      if (this.platform.is('android')) {
        token = await this.firebaseNative.getToken();
      }
      if (this.platform.is('ios')) {
        token = await this.firebaseNative.getToken();
        // const perm = await this.firebaseNative.grantPermission();
      }
    } else {
      // Handle web app / browser
    }

    console.log('token ', token);

    return this.saveToken(token);
  }

  private async saveToken(token: string) {
    console.log('saving token ', token);
    if (!token) {
      return;
    }

    const devicesKey = this.afdb.database
      .ref()
      .child('devices')
      .push().key;

    const deviceData = {
      token: token,
      userId: firebase.auth().currentUser.uid,
    };

    let devicesPayload = {};
    devicesPayload[`devices/${devicesKey}`] = deviceData;

    const result = await this.afdb.database.ref().update(devicesPayload);

    console.log(result);

    return result;
  }

  public listenToNotifications() {
    if (this.platform.is('cordova')) {
      return this.firebaseNative.onNotification();
    }

    return Observable.of(false);
  }
}
