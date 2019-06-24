import { Fueling } from './fueling.model';
import { Action } from '@ngrx/store';

export enum fuelingActionTypes {
  ADD_FUELING = 'Add fueling',
}

export interface AddFuelingPayload {fueling: Fueling; }
export class AddFueling implements Action {
  type = fuelingActionTypes.ADD_FUELING;
  constructor(public payload: AddFuelingPayload) {}
}

export const fuelingActions = {
  AddFueling
};

export type FuelingActions = AddFueling;
