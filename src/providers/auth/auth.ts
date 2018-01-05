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

import { API_CONFIG_VALUES } from '../../config/api.config';


@Injectable()
export class AuthProvider {
  private socialProvider: any;

  constructor(
    private app: App,
    private plt: Platform,
    private store: Store<AppState>,
    private storage: StorageProvider,
    private afauth: AngularFireAuth,
    private fb: Facebook,
    private google: GooglePlus,
    private twitter: TwitterConnect
  ) {}

  /**
   * Email/password login
   *
   * @param {any} email
   * @param {any} password
   * @returns
   * @memberof AuthProvider
   */
  public doNativeLogin(email, password) {
    console.log("native afth login success", email + " " + password);
    return this.afauth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Facebook login wrapper method
   *
   * @returns {Promise<any>}
   * @memberof AuthProvider
   */
  public doFacebookLogin(): Promise<any> {
    console.log("doFacebookLogin()");

    if (this.plt.is("cordova")) {
      console.log("in cordova");
      return this.doFacebookCordovaLogin();
    } else {
      this.socialProvider = "Facebook";
      return this.doSocialWebLogin(this.socialProvider);
    }
  }
  /**
   * Facebook login on device
   *
   * @private
   * @returns
   * @memberof AuthProvider
   */
  private doFacebookCordovaLogin(): Promise<any> {
    return this.fb
      .login(["email"])
      .then((res: FacebookLoginResponse) => {
        console.log("Logged into Facebook using plugin", res);

        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
          res.authResponse.accessToken
        );

        return this.callSignInWithCredentials(facebookCredential).then(
          newUser => {
            this.addUserProfile(newUser);
          }
        );
      })
      .catch(e => {
        console.error("Error! ", e);
        return Promise.reject(e);
      });
  }
  /**
   * Wrapper method for Firebase.auth.signInWithPopup()
   *
   * @private
   * @param {any} providerId
   * @returns
   * @memberof AuthProvider
   */
  private doSocialWebLogin(providerId): Promise<any> {
    let socialProvider;

    switch (providerId) {
      case "Facebook":
        socialProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case "Google":
        socialProvider = new firebase.auth.GoogleAuthProvider();
        break;
      case "Twitter":
        socialProvider = new firebase.auth.TwitterAuthProvider();
        break;
    }

    return this.afauth.auth
      .signInWithPopup(socialProvider)
      .then(res => {
        return res;
      })
      .then(newUser => {
        this.addUserProfile(newUser);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }

  public getFBLoginStatus() {
    return this.fb.getLoginStatus();
  }
  /**
   * Google login wrapper method
   *
   * @returns {Promise<any>}
   * @memberof AuthProvider
   */
  public doGoogleLogin(): Promise<any> {
    if (this.plt.is('cordova')) {
      console.log('in cordova');
      return this.doGoogleCordovaLogin();
    } else {
      this.socialProvider = 'Google';
      return this.doSocialWebLogin(this.socialProvider);
    }
  }

  /**
   * Google OAuth login on device
   *
   * @returns
   * @memberof AuthProvider
   */
  private doGoogleCordovaLogin(): Promise<any> {
    console.log('doCordovaLogin');
    return this.google
      .login({
        webClientId: API_CONFIG_VALUES.google_ab_app_web_client_id,
        offline: true
      })
      .then(
        res => {
          const googleCred = firebase.auth.GoogleAuthProvider.credential(
            res.idToken
          );
          return this.callSignInWithCredentials(googleCred).then(newUser => {
            this.addUserProfile(newUser);
          });
        },
        err => {
          console.error('Error: ', err);
          return Promise.reject(err);
        }
      );
  }
  /**
   * Twitter login wrapper method
   *
   * @returns
   * @memberof AuthProvider
   */
  public doTwitterLogin(): Promise<any> {
    if (this.plt.is('cordova')) {
      //On device
      return this.doTwitterCordovaLogin();
    } else {
      this.socialProvider = 'Twitter';
      return this.doSocialWebLogin(this.socialProvider);
    }
  }
  /**
   * Twitter login on device
   *
   * @private
   * @returns
   * @memberof AuthProvider
   */
  private doTwitterCordovaLogin(): Promise<any> {
    return this.twitter.login().then(
      res => {
        const twitterCred = firebase.auth.TwitterAuthProvider.credential(
          res.token,
          res.secret
        );

        return this.callSignInWithCredentials(twitterCred).then(newUser => {
          this.addUserProfile(newUser);
        });
      },
      err => {
        console.error(err);
        return Promise.reject(err);
      }
    );
  }

  // Registration

  /**
   * Register account in Firebase
   *
   * @param {any} user
   * @returns
   * @memberof AuthProvider
   */
  doRegister(user: any): Promise<any> {
    return this.afauth.auth
      .createUserWithEmailAndPassword(user.emailAddress, user.password)
      .then(newUser => {
        return Promise.all([
          this.updateUserProfile(newUser, user),
          this.addUserProfile(newUser, user)
        ]);
      });
  }

  // Password Reset
  /**
   *
   *
   * @param {any} email
   * @returns {Promise<any>}
   * @memberof AuthProvider
   */
  doResetPassword(email: any): Promise<any> {
    return this.afauth.auth.sendPasswordResetEmail(email).then(res => {
      console.log(res);
      return res;
    });
  }

  // Angular Fire utils
  /**
   * Wrapper for afauth.auth.signInWithCredentials
   *
   * @param {any} credential
   * @returns
   * @memberof AuthProvider
   */
  callSignInWithCredentials(credential: any) {
    console.log('callsigninwithcreds');

    return this.afauth.auth
      .signInWithCredential(credential)
      .then(res => {
        console.log('Firebase success ' + JSON.stringify(res));
        return res;
      })
      .catch(err => {
        console.error('Firebase error: ' + JSON.stringify(err));
        return Promise.reject(err);
      });
  }

  // ** Firebase utils ** //

  /**
   * Wrapper for Firebase user.updateProfile object
   *
   * @param {any} firebaseUser
   * @param {any} user
   * @returns
   * @memberof AuthProvider
   */
  updateUserProfile(firebaseUser, user) {
    console.log(firebaseUser);
    console.log(user);

    return firebaseUser.updateProfile({
      displayName: user.displayName
      // photoURL: user.photo
    });
  }

  // ** Realtime DB ** //

  /**
   * Creates userProfile record in realtime DB
   *
   * @param {any} newUser FirebaseUser returned from native createUserWithEmailAndPassword()
   * @param {any} user user details from RegisterPage component
   * @returns
   * @memberof AuthProvider
   */
  addUserProfile(newUser: any, user?: any) {


    // TODO this first bit is a mess, trying to accout for social and native logins  - userParam!!!
    let userParam;

    if (!user) {
      console.log('there is no user?')
      userParam = newUser;
      console.log(userParam)
    } else {
      userParam = user;
    }
    console.log('addUserProfile ', newUser, user);

    // Sometimes (on social web logins for eg) FirebaseUser comes in another object
    // this strips it out
    console.log(userParam);
    if (newUser.user) {
      userParam = newUser.user;
    } else {
      userParam = newUser;
    }

    console.log(userParam);

    return firebase
      .database()
      .ref('/userProfile')
      .child(userParam.uid)
      .set({
        name: userParam.displayName,
        emailAddress: userParam.email,
        avatarImage: userParam.photoURL,
        phoneNumber: null, // dummy
        // homeLocation: user.homeLocation, // can't set this from social logins as not passed from Reg form object
        averageStarRating: null //
      });
  }
}

