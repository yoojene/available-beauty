import * as authState from './auth/auth.state';

export interface AppState {
  auth: authState.AuthState;
}
