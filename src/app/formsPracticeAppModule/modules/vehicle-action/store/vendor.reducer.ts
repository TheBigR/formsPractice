import { Vendor } from './vendor.model';
import { AddVendor, RemoveVendor, VendorActions, vendorActionTypes } from './vendor.actions';


export const VendorState: Map<string, Vendor> = new Map<string, Vendor>([]);

export function vendorReducer(state = VendorState, action: VendorActions): Map<string, Vendor> {
  switch (action.type) {
    case vendorActionTypes.ADD_VENDOR: {
      const currentVendor = (action as AddVendor).payload.vendor;
      const currentAddVendorState = new Map(state);
      currentAddVendorState.set(currentVendor._id, currentVendor);
      console.log('just added ' + currentVendor.name);
      return currentAddVendorState;
    }
    case vendorActionTypes.REMOVE_VENDOR: {
      const currentVendor = (action as RemoveVendor).payload.vendor;
      const currentRemoveVendorState = new Map(state);
      currentRemoveVendorState.delete(currentVendor._id);
      console.log('just removed ' + currentVendor.name);
      return currentRemoveVendorState;
    }
    default:
      return state;
  }
}
