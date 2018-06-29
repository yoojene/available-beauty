import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { GooglePlus } from '@ionic-native/google-plus';
import { App, Platform } from 'ionic-angular';
import { Store } from '@ngrx/store';

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
  private geolocation: any;

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
    console.log('native afth login success', email + ' ' + password);

    return this.afauth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Facebook login wrapper method
   *
   * @param {boolean} stylist
   * @returns {Promise<any>}
   * @memberof AuthProvider
   */
  public doFacebookLogin(stylist): Promise<any> {
    console.log('doFacebookLogin()');

    if (this.plt.is('cordova')) {
      console.log('in cordova');
      return this.doFacebookCordovaLogin(stylist);
    } else {
      this.socialProvider = 'Facebook';
      return this.doSocialWebLogin(stylist, this.socialProvider);
    }
  }
  /**
   * Facebook login on device
   *
   * @param {boolean} stylist
   * @private
   * @returns
   * @memberof AuthProvider
   */
  private doFacebookCordovaLogin(stylist): Promise<any> {
    return this.fb
      .login(['email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook using plugin', res);

        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
          res.authResponse.accessToken
        );

        return this.callSignInWithCredentials(facebookCredential).then(
          newUser => {
            this.addUserProfile(stylist, newUser);
          }
        );
      })
      .catch(e => {
        console.error('Error! ', e);
        return Promise.reject(e);
      });
  }
  /**
   * Wrapper method for Firebase.auth.signInWithPopup()
   *
   * @private
   * @param {boolean} stylist
   * @param {any} providerId
   * @returns
   * @memberof AuthProvider
   */
  private doSocialWebLogin(stylist, providerId): Promise<any> {
    let socialProvider;

    switch (providerId) {
      case 'Facebook':
        socialProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case 'Google':
        socialProvider = new firebase.auth.GoogleAuthProvider();
        break;
      case 'Twitter':
        socialProvider = new firebase.auth.TwitterAuthProvider();
        break;
    }

    return this.afauth.auth
      .signInWithPopup(socialProvider)
      .then(res => {
        return res;
      })
      .then(newUser => {
        this.addUserProfile(stylist, newUser);
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
   * @param {boolean} stylist
   * @returns {Promise<any>}
   * @memberof AuthProvider
   */
  public doGoogleLogin(stylist): Promise<any> {
    if (this.plt.is('cordova')) {
      console.log('in cordova');
      return this.doGoogleCordovaLogin(stylist);
    } else {
      this.socialProvider = 'Google';
      return this.doSocialWebLogin(stylist, this.socialProvider);
    }
  }

  /**
   * Google OAuth login on device
   *
   * @param {boolean} stylist
   * @returns
   * @memberof AuthProvider
   */
  private doGoogleCordovaLogin(stylist): Promise<any> {
    console.log('doCordovaLogin');
    return this.google
      .login({
        webClientId: API_CONFIG_VALUES.google_ab_app_web_client_id,
        offline: true,
      })
      .then(
        res => {
          const googleCred = firebase.auth.GoogleAuthProvider.credential(
            res.idToken
          );
          return this.callSignInWithCredentials(googleCred).then(newUser => {
            this.addUserProfile(stylist, newUser);
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
   * @param {boolean} stylist
   * @returns
   * @memberof AuthProvider
   */
  public doTwitterLogin(stylist): Promise<any> {
    if (this.plt.is('cordova')) {
      //On device
      return this.doTwitterCordovaLogin(stylist);
    } else {
      this.socialProvider = 'Twitter';
      return this.doSocialWebLogin(stylist, this.socialProvider);
    }
  }
  /**
   * Twitter login on device
   *
   * @param {boolean} stylist
   * @private
   * @returns
   * @memberof AuthProvider
   */
  private doTwitterCordovaLogin(stylist): Promise<any> {
    return this.twitter.login().then(
      res => {
        const twitterCred = firebase.auth.TwitterAuthProvider.credential(
          res.token,
          res.secret
        );

        return this.callSignInWithCredentials(twitterCred).then(newUser => {
          this.addUserProfile(stylist, newUser);
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
   * Register account in Firebase.
   *
   * @param user user form information
   * @param isStylist is a user or stylist being registered
   * @returns
   * @memberof AuthProvider
   */
  public async doRegister(user: any, isStylist: boolean): Promise<any> {
    let newUser;

    if (!isStylist) {
      // Anonymous user account should now be linked with a real account
      const nativeCred = firebase.auth.EmailAuthProvider.credential(
        user.emailAddress,
        user.password
      );

      try {
        await this.linkAnonymousAccount(nativeCred);
      } catch (err) {
        console.error(err);
        // TODO handle link error failure
      }
      newUser = firebase.auth().currentUser;
    } else {
      // Registering stylist, use angularfire createUserWithEmailAndPassword()
      console.log('Stylist - Create the user');
      newUser = await this.afauth.auth.createUserWithEmailAndPassword(
        user.emailAddress,
        user.password
      );
    }

    // Update the Firebase Auth user profile with the display name and add /userProfile to RTDB
    return Promise.all([
      this.updateUserProfile(newUser, user),
      this.addUserProfile(user.isStylist, newUser, user),
    ]);
  }

  // Password Reset
  /**
   *
   *
   * @param {any} email
   * @returns {Promise<any>}
   * @memberof AuthProvider
   */
  public doResetPassword(email: any): Promise<any> {
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
  private callSignInWithCredentials(credential: any) {
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
   * @param firebaseUser
   * @param user
   */
  private updateUserProfile(firebaseUser, user) {
    console.log(firebaseUser);
    console.log(user);

    return firebaseUser.updateProfile({
      displayName: user.displayName,
      // photoURL: user.photo
    });
  }
  /**
   *
   * Link anonymous firebase account with newly registered one
   *
   * @param newUserCred
   */
  private async linkAnonymousAccount(newUserCred) {
    try {
      const linkedUser = await firebase
        .auth()
        .currentUser.linkAndRetrieveDataWithCredential(newUserCred);
      console.log('Anonymous User Linked Success');
    } catch (err) {
      console.error('Anonymous User Linked Failed');
      console.error(err);
    }
  }

  // ** Realtime DB ** //

  /**
   * Creates userProfile record in realtime DB
   *
   * @param stylist Flag to denote whether user is stylist or not
   * @param newUser FirebaseUser returned from native createUserWithEmailAndPassword()
   * @param user user details from RegisterPage component
   * @returns
   */
  private addUserProfile(stylist: boolean, newUser: any, user?: any) {
    // Sometimes (on social web logins for eg) FirebaseUser comes within another object, this strips it out.
    let userParam;
    if (newUser.user) {
      userParam = newUser.user;
    } else {
      userParam = newUser;
    }

    let userProfile;
    if (!user) {
      // For Social logins, we need to location from storage
      this.storage.getStorage('geolocation').subscribe(res => {
        this.geolocation = res;

        userProfile = {
          name: userParam.displayName,
          emailAddress: userParam.email,
          avatarImage: userParam.photoURL,
          phoneNumber: null,
          homeLocation: this.geolocation,
          isStylist: stylist,
        }; // dummy

        console.log(userProfile);

        return firebase
          .database()
          .ref('/userProfile')
          .child(userParam.uid)
          .set(userProfile);
      });
    } else {
      this.createNativeUserProfile(user).then(res => {
        userProfile = res;

        return firebase
          .database()
          .ref('/userProfile')
          .child(userParam.uid)
          .set(userProfile);
      });
    }
  }

  /**
   * Create the userProfile in Realtime DB with default avatar
   * @param user
   */
  private createNativeUserProfile(user) {
    return firebase
      .storage()
      .ref()
      .child('default-images/no-avatar.png')
      .getDownloadURL()
      .then(url => {
        const userProfile = {
          name: user.displayName,
          emailAddress: user.emailAddress,
          avatarImage: url,
          phoneNumber: null, // dummy
          homeLocation: user.homeLocation,
        };

        return userProfile;
      });
  }
}
