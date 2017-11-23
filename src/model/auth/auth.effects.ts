
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import {App} from 'ionic-angular';

import * as authActions from './auth.actions';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import { LoginSuccessAction, RegisterSuccessAction, RegisterErrorAction } from './auth.actions';

import {AuthService} from '../../providers/auth/auth.provider';
import {UserProvider} from '../../providers/user/user';
import { HttpErrorResponse } from '@angular/common/http';
import { AppState } from '../app.state';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private user: UserProvider,
    private app: App
  ) {}

  @Effect({ dispatch: false })
  login: Observable<any> = this.actions$
    .ofType(authActions.LOGIN)
    .map(action => {
      // Workaround typechecking payload on Action https://github.com/ngrx/platform/issues/31#issuecomment-308056417
      let payload = (action as any).payload;

      if (payload.isNativeLogin) {
        this.authService.doLogin(payload);
      } else {
        this.authService.doSocialLogin(payload);
      }
    });

  @Effect()
  register: Observable<any> = this.actions$
    .ofType(authActions.REGISTER)
    .map(action => {
      console.log(action);

      let payload = (action as any).payload;
      console.log( (action as any).payload);

      // Call service to register with API
      this.user.addUser(payload)
      .map(res => {console.log(res);
       new RegisterSuccessAction({res});
      })
        // new RegisterSuccessAction({res})})
      .subscribe(
        res => {
          console.log(res);
          // thisthis.store.dispatch(new RegisterSuccessAction());
        },
        (err: HttpErrorResponse) => {
          console.error(err);

          // this.store.dispatch(new RegisterErrorAction(err));
        }
      )
    });

  @Effect()
  registerSuccess: Observable<any> = this.actions$
    .ofType(authActions.REGISTER_SUCCESS)
    .map(action => {
      let payload = (action as any).payload;

      console.log('registerSuccess Effect')

      this.app.getActiveNav().push('HomePage');

    });

  // @Effect({dispatch: false})
  // authError: Observable<Action> = this.actions$
  //   .ofType(authActions.USER_NOT_VALIDATED)
  //   .map(res => console.log(res.payload))
  // .do(action => console.error(action));

  //  .map(toPayload)
  //  .switchMap(payload => {
  //    console.log(payload);
  //    // let payload = {email: 'DUmy', password: 'wrongone'}
  //    return Observable.of(new LoginSuccessAction(payload));
  //  });
}

