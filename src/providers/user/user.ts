import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { API_CONFIG, ApiConfig } from '../../model/api.config';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/users/user.model';


@Injectable()
export class UserProvider {
  constructor(
    public http: HttpClient,
    @Inject(API_CONFIG) public config: ApiConfig
  ) {}
  /**
   * Return users
   *
   * @returns {Observable<User>}
   * @memberof UserProvider
   */
  public getUsers() {
    return this.http.get<User>(this.config.endpointURL + this.config.usersPath);

  }
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
    return this.http
      .put(
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
    return this.http
      .delete(this.config.endpointURL + this.config.usersPath);

  }
}
