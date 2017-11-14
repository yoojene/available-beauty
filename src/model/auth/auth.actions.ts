import { Action } from "@ngrx/store";
import { LoginDetails } from "./auth.state";

export const LOGIN =  '[Auth] Login';
export const LOGIN_SUCCESS = "[Auth] Login Success";
export const LOGIN_ERROR = "[Auth] Login Error";

export const LOGOUT = "[Auth] Logout";
export const LOGOUT_SUCCESS = "[Auth] Logout Success";

export const USER_NOT_VALIDATED = "[Auth] User Not Validated";


// Login
export class LoginAction implements Action {
    readonly type = LOGIN;
    constructor(public payload: LoginDetails = null) {
      console.info('LoginAction()', payload)
    }
}

export class LoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: LoginDetails) {
       console.info(`LoginSuccessAction()`, payload);
    }
}

export class LoginErrorAction implements Action {
    readonly type = LOGIN_ERROR;
    constructor(public payload?: any) {
       console.info(`LoginErrorAction()`, payload);
    }
  }


// Logout

export class LogoutAction implements Action {
  readonly type = LOGOUT;
  constructor(public payload: LoginDetails) {
    console.info("LogoutAction()", payload);
  }
}

export class LogoutSuccessAction implements Action {
    readonly type = LOGOUT_SUCCESS;
    constructor(public payload: LoginDetails) {
       console.info(`LogoutSuccessAction()`, payload);
    }
}


export class UserNotValidatedAction implements Action {
  readonly type = USER_NOT_VALIDATED;

  constructor(public payload?: any) {
    console.error(`UserNotValidatedAction()`, payload);
  }
}


// Type

export type Actions = LoginAction |
LoginSuccessAction |
LoginErrorAction |
LogoutAction |
LogoutSuccessAction |
UserNotValidatedAction;


