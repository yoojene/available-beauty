import {Injectable} from '@angular/core';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import {App} from 'ionic-angular';
import {Store} from '@ngrx/store';

import firebase from 'firebase';
import { UserNotValidatedAction } from '../../model/auth/auth.actions';
import { AppState } from '../../model/app.state';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthProvider {
  constructor(private app: App,
              private store: Store<AppState>,
              private fb: Facebook) {}

  public doLogin(email, password) {
    console.log('native login success', email + ' ' +  password);
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  public doSocialLogin(event) {
    console.log('Facebook Login Success', event);

    this.fb
      .login(['email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into facebook ', res)
        this.app.getActiveNav().push('TabsPage');
      })
      .catch(e => console.error('Error! ', e));

    // Call facebook API
    // Return success / failure
    // Update store with success / failure


  }

}
