
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as authActions from './auth.actions';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import { LoginSuccessAction } from './auth.actions';

import {AuthService} from '../../providers/auth/auth.provider';


@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private authService: AuthService) {}

  @Effect({dispatch: false})
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
    }
    );

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

