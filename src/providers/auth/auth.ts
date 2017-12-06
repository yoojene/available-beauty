import {Injectable} from '@angular/core';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import {TwitterConnect} from '@ionic-native/twitter-connect';
import {GooglePlus} from '@ionic-native/google-plus';
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

import { API_CONFIG_VALUES } from '../../config/api.config';


@Injectable()
export class AuthProvider {
  constructor(
    private app: App,
    private plt: Platform,
    private store: Store<AppState>,
    private storage: StorageProvider,
    private afauth: AngularFireAuth,
    private socialAuthService: AuthService,
    private fb: Facebook,
    private google: GooglePlus,
    private twitter: TwitterConnect
  ) {}

  public doNativeLogin(email, password) {
    console.log("native afth login success", email + " " + password);
    return this.afauth.auth.signInWithEmailAndPassword(email, password);
    // return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  public doFacebookLogin(): Promise<any> {
    console.log("doFacebookLogin()");

    if (this.plt.is("cordova")) {
      //On device
      console.log("in cordova");
      return this.doFacebookCordovaLogin();
    } else {
      // web
      console.log('web');
      return this.doSocialWebLogin(FacebookLoginProvider.PROVIDER_ID);
    }
  }

  private doFacebookCordovaLogin() {
    return this.fb
      .login(['email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook using plugin', res);

        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
          res.authResponse.accessToken
        );

        return this.afauth.auth
          .signInWithCredential(facebookCredential)
          .then(success => {
            console.log('Firebase success; ' + JSON.stringify(success));
            return success;
          })
          .catch(err => {
            console.error('Firebase error: ' + JSON.stringify(err));
            return err;
          });
      })
      .catch(e => {
        console.error('Error! ', e);
        return e;
      });
  }

  private doSocialWebLogin(providerId) {
    return this.socialAuthService.signIn(providerId);
  }

  public getFBLoginStatus() {
    return this.fb.getLoginStatus();
  }

  public doGoogleLogin(): Promise<any> {
    if (this.plt.is('cordova')) {
      //On device
      console.log('in cordova');
      return this.doGoogleCordovaLogin();
    } else {
      // web
      console.log('web');
      return this.doSocialWebLogin(GoogleLoginProvider.PROVIDER_ID);
    }
  }

  doGoogleCordovaLogin() {

    console.log('doCordovaLogin');

    return this.google
      .login({
        webClientId: API_CONFIG_VALUES.google_ab_app_web_client_id,
        offline: true
      })
      .then(res => {
          const googleCred = firebase.auth.GoogleAuthProvider.credential(res.idToken);

          return this.afauth.auth
            .signInWithCredential(googleCred)
            .then(response => {
              console.log('Firebase success: ' + JSON.stringify(response));
              return response;
            })
            .catch(err => {
              console.error('Firebase error: ' + JSON.stringify(err));
              return err;
            });
        }, err => {
          console.error('Error: ', err);

          return Promise.reject(err);
        });
  }

  doTwitterLogin() {
    if (this.plt.is('cordova')) {
      //On device
      return this.doTwitterCordovaLogin();
    } else {
      return this.doTwitterWebLogin();
    }
  }

  doTwitterCordovaLogin() {

    return this.twitter.login()
    .then(res => {

      const twitterCred = firebase.auth.TwitterAuthProvider.credential(res.token, res.secret);

      return this.afauth.auth
        .signInWithCredential(twitterCred)
        .then(response => {
          console.log("Firebase success " + response);
          return response;
        })
        .catch(err => {
          console.error("Firebase error: " + JSON.stringify(err));
          return err;
         });

    },err => {
      console.error(err);
      return err;

    })
  }

  doTwitterWebLogin() {
    let p = new Promise(resolve => console.log('success'));
    return p;
  }
}

