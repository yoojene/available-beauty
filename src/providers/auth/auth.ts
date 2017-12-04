import {Injectable} from '@angular/core';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import {App, Platform} from 'ionic-angular';
import {Store} from '@ngrx/store';

import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserNotValidatedAction } from '../../model/auth/auth.actions';
import { AppState } from '../../model/app.state';
import { Observable } from 'rxjs/Observable';
import { StorageProvider } from '../storage/storage';
import { AuthService } from 'angular4-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';


@Injectable()
export class AuthProvider {
  constructor(private app: App,
              private plt: Platform,
              private store: Store<AppState>,
              private storage: StorageProvider,
              private afauth: AngularFireAuth,
              private socialAuthService: AuthService,
              private fb: Facebook) {}



  public doNativeLogin(email, password) {
    console.log('native afth login success', email + ' ' +  password);
    // return this.afauth.auth.signInWithEmailAndPassword(email, password);
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  public doFacebookLogin(): Promise<any> {
    console.log('doFacebookLogin()');

    // this.getFBLoginStatus().then(res => console.log(res));

      if (this.plt.is('cordova')){
        //On device
        console.log('in cordova')
        return this.fb
          .login(['email'])
             .then((res: FacebookLoginResponse) => {
                console.log('Logged into Facebook using plugin', res);

                const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);

                 return this.afauth.auth
                   .signInWithCredential(facebookCredential)
                   .then(success => {
                     console.log('Firebase success; ' + JSON.stringify(success));
                   })
                   .catch(err => {
                     console.error('Firebase error: ' + JSON.stringify(err));
                   });
            })
            .catch(e => {
               console.error('Error! ', e);
               return e;
            });

      } else {
        // web
        console.log('web');
        return this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);

      }



    // Call facebook API
    // Return success / failure
    // Update store with success / failure
    }

  public getFBLoginStatus() {

    return this.fb.getLoginStatus();
  }

  }

