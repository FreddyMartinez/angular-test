import { ActionReducerMap } from '@ngrx/store';
import * as nameReducer from './name.reducer';

export interface AppState {
  name: nameReducer.NameState;
}

export const appReducers: ActionReducerMap<AppState> = {
  name: nameReducer.NameReducer
};
