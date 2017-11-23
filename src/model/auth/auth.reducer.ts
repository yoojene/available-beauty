import * as authActions from './auth.actions';
import * as authState from './auth.state';

export function authReducer(state = authState.initialState,
  action: authActions.Actions): authState.AuthState {

    switch (action.type) {
      case authActions.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.payload
      })

      case authActions.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: false,
      })

      case authActions.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        registrationDetails: action.payload
      })

      case authActions.REGISTER_ERROR:
      return Object.assign({}, state, {
        registrationError: action.payload
      })


      default:
        return state;
  }

}
