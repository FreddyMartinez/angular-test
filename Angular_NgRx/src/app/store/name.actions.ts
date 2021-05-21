import { Action } from '@ngrx/store';

export const SET_NAME = '[NAME] Set Name';
export const RESET_NAME = '[NAME] Reset Name';

export class SetName implements Action {
  public readonly type = SET_NAME;

  constructor(public name: string) { }
}

export class ResetName implements Action {
  public readonly type = RESET_NAME;
}

export type nameActions =
  SetName |
  ResetName;