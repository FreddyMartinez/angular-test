import * as fromNameActions from './name.actions';

export interface NameState {
  name: string;
}

export const initialState: NameState = {
  name: undefined,
};

export function NameReducer(state = initialState, action: fromNameActions.nameActions) {
  switch (action.type) {
    case fromNameActions.SET_NAME:
      return {
        ...state,
        name: action.name,
      };

    case fromNameActions.RESET_NAME:
      return {
        ...state,
        name: undefined,
      };

    default:
      return state;
  }
}