import { Injectable, Inject, style } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { API_CONFIG, ApiConfig } from '../../model/api.config';
import { Stylist } from '../../model/stylist/stylist.model';

import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Review } from '../../model/review/review.model';

@Injectable()
export class StylistProvider {
  constructor(
    public http: HttpClient,
    public afdb: AngularFireDatabase,
    @Inject(API_CONFIG) public config: ApiConfig
  ) {}

  /**
   * Get stylists
   *
   * @returns
   * @memberof StylistProvider
   */
  getStylists() {
    //  return this.http.get<Stylist>(this.config.endpointURL + this.config.stylistsPath);
    // return Observable.of(MOCK_STYLISTS);
    return this.afdb.list<Stylist>('stylistProfile');
  }

  getStylistsBySkill(skillName) {
    return this.afdb.list<Stylist>('stylistProfile').query.orderByChild('skill').isEqual(skillName);
  }

  setStylistSkills(uid, skills) {
    this.afdb.database.ref().child('userProfile/' + uid + 'skills').set(skills);
    
  }

  getStylist(uid) {
    // TODO should this be .object returned?  Only ever should be 1-1 stylist / user?
    console.log(uid);

    return this.afdb.list<Stylist>(`stylistProfile`, ref => {
      return ref.orderByChild('userId').equalTo(uid);
    });
  }

  getStylistById(stylist) {
    console.log(stylist);
    return this.afdb.object<Stylist>(`stylistProfile/${stylist.stylistId}`);
  }

  addStylistProfile(stylist: Stylist) {
    console.log('addStylistProfile');
    console.log(stylist);

    let stylistProfile = {
      userId: firebase.auth().currentUser.uid,
      stylistName: stylist.stylistName,
      mobile: stylist.mobile,
      mobileRange: stylist.mobileRange,
      bio: stylist.bio,
      baseLocation: stylist.baseLocation,
      addressLine1: stylist.addressLine1,
      addressLine2: stylist.addressLine2,
      addressTownCity: stylist.addressTownCity,
      addressCounty: stylist.addressCounty,
      addressPostcode: stylist.addressPostcode,
      bannerImage: stylist.bannerImage,
      galleryImages: null,
    };

    if (stylist.loadImages) {
      stylistProfile.galleryImages = stylist.galleryImages;
    }

    let stylistKey = this.afdb.database
      .ref()
      .child('stylistProfile')
      .push().key;

    let stylistPayload = {};
    stylistPayload[`stylistProfile/${stylistKey}`] = stylistProfile;

    return this.afdb.database
      .ref()
      .update(stylistPayload)
      .then(res => console.log(res));
  }

  public async addStylistReview(
    stylistId: any,
    userId: any,
    review: any,
    starRating: any
  ) {
    const reviewData = {
      stylistId: stylistId,
      userId: userId,
      reviewText: review,
      starRating: starRating,
    };

    const reviewKey = this.afdb.database
      .ref()
      .child(`/stylistProfile/${stylistId}/reviews/`)
      .push().key;

    let reviewPayload = {};
    reviewPayload[
      `/stylistProfile/${stylistId}/reviews/${reviewKey}`
    ] = reviewData;

    console.log(reviewPayload);

    const result = await this.afdb.database.ref().update(reviewPayload);

    console.log(result);

    return result;
  }

  getStylistReview(stylistId: any) {
    console.log(stylistId);
    return this.afdb.list<Review>(`stylistProfile/${stylistId}/reviews`);
  }
}
