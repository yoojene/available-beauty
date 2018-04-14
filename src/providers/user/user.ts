import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { API_CONFIG, ApiConfig } from '../../model/api.config';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/users/user.model';

import { AngularFireDatabase } from 'angularfire2/database';
import { UtilsProvider } from '../utils/utils';

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
   * @returns {Observable<User>}
   * @memberof UserProvider
   */
  public getStylistUsers() {
    // return this.http.get<User>(this.config.endpointURL + this.config.usersPath);
    return this.afdb.list<User>('userProfile', ref => {
      return ref.orderByChild('isStylist').equalTo(true);
    });
  }
  /**
   * Look up userId in /userProfile and check isStylist attribute.
   * If true return profile else false
   *
   * @param {any} uid
   * @returns
   * @memberof UserProvider
   */
  public checkIsStylist(uid) {
    return this.afdb
      .list<User>('userProfile', ref => {
        return ref.orderByChild('isStylist').equalTo(true);
      })
      .snapshotChanges()
      .mergeMap(res => {
        const keyed = this.utils.generateFirebaseKeyedValues(res);
        const user = keyed.filter(el => {
          return el.key === uid;
        });
        if (user.length > 0) {
          return Observable.of(user);
        } else {
          return Observable.of(false);
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

  // OLD *****
  /**
   * Add a new user
   *
   * @param {any} user
   * @returns
   * @memberof UserProvider
   */
  public addUser(user: any) {
    console.log(user);
    return this.http.post<User>(
      this.config.endpointURL + this.config.usersPath,
      user
    );
  }
  /**
   * Update existing user details
   *
   * @param {any} userId
   * @param {any} userDetails
   * @returns
   * @memberof UserProvider
   */
  public updateUser(userId, userDetails) {
    return this.http.put(
      this.config.endpointURL + this.config.usersPath + userId,
      userDetails
    );
  }
  /**
   * Delete a user
   *
   * @param {any} userId
   * @returns
   * @memberof UserProvider
   */
  public deleteUser(userId) {
    // When would we do this?  Account delete only?
    return this.http.delete(this.config.endpointURL + this.config.usersPath);
  }
}
