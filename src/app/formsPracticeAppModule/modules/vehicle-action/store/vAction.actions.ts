import { Action } from '@ngrx/store';
import { VAction } from './vAction.model';

export enum vActionActionTypes {
  ADD_VACTION = 'Add vAction',
  REMOVE_VACTION = 'Remove vAction',
}

export interface AddVactionPayload {vAction: VAction; }
export class AddVaction implements Action {
  type = vActionActionTypes.ADD_VACTION;
  constructor(public payload: AddVactionPayload) {}
}

export interface RemoveVactionPayload {vAction: VAction; }
export class RemoveVaction implements Action {
  type: vActionActionTypes.REMOVE_VACTION;
  constructor(public payload: RemoveVactionPayload) {}
}

export const vActionActions = {
  AddVaction,
  RemoveVaction
};

export type VActionActions = AddVaction | RemoveVaction;
