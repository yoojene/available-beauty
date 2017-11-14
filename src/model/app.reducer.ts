import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { AppState } from './app.state';

import { authReducer } from './auth/auth.reducer';


const reducers = {
  auth: authReducer
}

// const reducer: ActionReducer<AppState> = (compose({}, combineReducers)(reducers));
const reducer: ActionReducer<AppState> = combineReducers(reducers);

export function APP_REDUCER(state: any, action: any): AppState {
  return reducer(state, action);
}
