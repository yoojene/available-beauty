import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { API_CONFIG, ApiConfig } from '../../model/api.config';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/users/user.model';
import firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { UtilsProvider } from '../utils/utils';
import { Review } from '../../model/review/review.model';

@Injectable()
export class UserProvider {
  constructor(
    public http: HttpClient,
    public afdb: AngularFireDatabase,
    private utils: UtilsProvider,
    @Inject(API_CONFIG) public config: ApiConfig
  ) {}
  /**
   * Return users
   *
   */
  public getStylistUsers(): AngularFireList<User> {
    // return this.http.get<User>(this.config.endpointURL + this.config.usersPath);
    return this.afdb.list<User>('userProfile', ref => {
      return ref.orderByChild('isStylist').equalTo(true);
    });
  }
  /**
   * Look up userId in /userProfile and check isStylist attribute.
   * If true return profile else false
   *
   */
  public checkIsStylist(uid: any) {
    return this.afdb
      .list('userProfile', ref => {
        return ref.orderByChild('isStylist').equalTo(true);
      })
      .snapshotChanges()
      .mergeMap(res => {
        const keyed = this.utils.generateFirebaseKeyedValues(res);
        const user = keyed.filter(el => {
          return el.key === uid;
        });
        if (user.length > 0) {
          return Observable.of(user) as any;
        } else {
          return Observable.of(false) as any;
        }
      });
  }

  public getUserById(id) {
    return this.afdb.object<User>(`userProfile/${id}`);
  }
  public getUserListById(id) {
    return this.afdb.list<User>(`userProfile/${id}`);
    // return this.afdb.list<User>(`userProfile`, ref => {
    //   return ref.key;
    // });
  }

  /**
   * OLD Creates userProfile record in realtime DB
   *
   * @param {boolean} stylist Flag to denote whether user is stylist or not
   * @param {any} newUser FirebaseUser returned from native createUserWithEmailAndPassword()
   * @param {any} user user details from RegisterPage component
   * @returns
   * @memberof AuthProvider
   */
  public updateUserProfileOld(userId: any, user: User) {
    console.log('updating user ' + userId);

    // let userProfile;
    // if (!user) {
    // this.storage.getStorage('geolocation').subscribe(res => {
    //   this.geolocation = res;

    let userProfile = {
      name: user.name,
      emailAddress: user.emailAddress,
      //  avatarImage: user.avatarImage,
      phoneNumber: user.phoneNumber,
      // homeLocation: user.homeLocation,
      // isStylist: user.isStylist,
    };

    console.log('Updating user ' + userProfile.name);

    let userPayload = {};
    userPayload[`userProfile/${userId}`] = userProfile;

    console.log('JSON USER CONTENT: ' + JSON.stringify(userPayload));

    return this.afdb.database
      .ref()
      .update(userPayload)
      .then(res => console.log(res));
    // } else {
    //   console.log('no user object');
    // }
  }
  /**
   * update userProfile in RTDB
   *
   * @param userId
   * @param userObj
   * @param isEdit true if on EditProfilePage, false if on StylistRegisterPage
   */
  public updateUserProfile(userId: any, userObj: any, isEdit: boolean) {
    console.log('updateUserProfile to promise');

    console.log(userId);
    console.log(userObj);
    const userProfile = {
      stylistName: userObj.stylistName,
      mobile: userObj.mobile,
      mobileRange: userObj.mobileRange,
      bio: userObj.bio,
      baseLocation: userObj.baseLocation,
      addressLine1: userObj.addressLine1,
      addressTownCity: userObj.addressTownCity,
      addressLine2: userObj.addressLine2,
      addressCounty: userObj.addressCounty,
      addressPostcode: userObj.addressPostcode,
      bannerImage: null,
      galleryImages: null,
      isStylist: true,
    };

    if (userObj.loadImages) {
      // TODO need to make sure this works for EditUserProfile.  Current flag is for StylistRegister
      userProfile.galleryImages = userObj.galleryImages;
      userProfile.bannerImage = userObj.bannerImage;
    }

    return this.getUserById(userId)
      .valueChanges()
      .take(1)
      .toPromise()
      .then((userres: any) => {
        const existUser = userres;

        const combined = { ...userProfile, ...existUser };

        console.log(combined);

        const userPayload = {};

        userPayload[`userProfile/${userId}`] = combined;

        return this.afdb.database
          .ref()
          .update(userPayload)
          .then(res => console.log(res));
      });
  }

  // Skills

  public setStylistSkills(uid, skills) {
    this.afdb.database
      .ref()
      .child('userProfile/' + uid + 'skills')
      .set(skills);
  }

  // Reviews

  public async addReview(receiverUid: any, review: any, starRating: any) {
    // TODO Do we want to associate the Review with the availability slot as well as the stylist?
    const reviewData = {
      senderUid: firebase.auth().currentUser.uid, // User
      receiverUid: receiverUid, // Mostly the Stylist but could be the user too
      reviewText: review,
      starRating: starRating,
    };

    const reviewKey = this.afdb.database
      .ref()
      .child(`reviews/`)
      .push().key;

    let reviewPayload = {};
    reviewPayload[`/reviews/${reviewKey}`] = reviewData;

    console.log(reviewPayload);

    const result = await this.afdb.database.ref().update(reviewPayload);

    console.log(result);

    return result;
  }

  public getReviewByReceiver(userId: any) {
    return this.afdb.list<Review>(`reviews`, ref => {
      return ref.orderByChild('receiverUid').equalTo(userId);
    });
  }
}
