import { Action } from '@ngrx/store';
import { Vendor } from './vendor.model';

export enum vendorActionTypes {
  ADD_VENDOR = 'Add Vendor',
  REMOVE_VENDOR = 'Remove Vendor',
}

export interface AddVendorPayload {vendor: Vendor; }
export class AddVendor implements Action {
  type = vendorActionTypes.ADD_VENDOR;
  constructor(public payload: AddVendorPayload) {}
}

export interface RemoveVendorPayload {vendor: Vendor; }
export class RemoveVendor implements Action {
  type = vendorActionTypes.REMOVE_VENDOR;
  constructor(public payload: RemoveVendorPayload) {}
}

export const vendorActions = {
  AddVendor,
  RemoveVendor
};

export type VendorActions = AddVendor | RemoveVendor;
