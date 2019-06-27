import { Action } from '@ngrx/store';
import { VAction } from './vAction.model';

export enum vActionActionTypes {
  ADD_VACTION = 'Add vAction',
  REMOVE_VACTION = 'Remove vAction',
  UPDATE_EDIT_VACTION = 'Update Edit vAction',
  SUBMIT_FORM = 'Submit Form',
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

export interface UpdateEditVactionPayload { vAction: Partial<VAction>; }
export class UpdateEditVaction implements Action {
  type: vActionActionTypes.UPDATE_EDIT_VACTION;
  constructor(public payload: UpdateEditVactionPayload) {}
}

export class SubmitForm implements Action {
  type: vActionActionTypes.SUBMIT_FORM;
  constructor() {}
}

export const vActionActions = {
  AddVaction,
  RemoveVaction,
  UpdateEditVaction,
  SubmitForm,
};

export type VActionActions = AddVaction | RemoveVaction | UpdateEditVaction | SubmitForm;
