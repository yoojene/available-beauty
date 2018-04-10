import { Injectable, Inject, style } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { API_CONFIG, ApiConfig } from '../../model/api.config';
import { Stylist } from '../../model/stylist/stylist.model';
import { MOCK_STYLISTS } from '../../mocks/stylist.mocks';
import { Observable } from 'rxjs/Observable';

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

  updateStylistProfile(key, value) {
    console.log(key);
    console.log(value);

    if (value instanceof Array) {
      value.forEach(el => {
        console.log(el);
      });
    }

    return this.afdb.database.ref().update({ key: value });
  }

  getStylistReview(stylistId: any) {
    console.log(stylistId);
    return this.afdb.list<Review>(`stylistProfile/${stylistId}/reviews`);
  }

  // OLD *****
  /**
   * Create a new stylist
   *
   * @param {any} stylist
   * @returns
   * @memberof StylistProvider
   */
  createStylist(stylist) {
    return this.http.post(
      this.config.endpointURL + this.config.stylistPath,
      stylist
    );
  }

  /**
   * Update existing an stylist
   *
   * @param {any} stylistId
   * @param {any} stylistDetails
   * @returns
   * @memberof StylistProvider
   */
  updateStylist(stylistId, stylistDetails) {
    return this.http.put(
      this.config.endpointURL + this.config.stylistsPath + stylistId,
      stylistDetails
    );
  }

  /**
   * Delete a stylist
   *
   * @returns
   * @memberof StylistProvider
   */
  deleteStylist() {
    // When would we do this?  Account delete only?
    return this.http.delete(this.config.endpointURL + this.config.stylistsPath);
  }
}
