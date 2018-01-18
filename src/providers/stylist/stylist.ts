import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { API_CONFIG, ApiConfig } from '../../model/api.config';
import { Stylist } from '../../model/stylist/stylist.model';
import { MOCK_STYLISTS } from '../../mocks/stylist.mocks';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

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
    console.log(uid);

    return this.afdb.list<Stylist>(`stylistProfile`, ref => {
      console.log(ref);
      return ref.orderByChild('userId').equalTo(uid);
    });
  }

  getStylistById(stylist) {
    console.log(stylist);
    return this.afdb.object<Stylist>(`stylistProfile/${stylist.stylistId}`);
  }

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
