import { VAction } from './vAction.model';
import { AddVaction, RemoveVaction, VActionActions, vActionActionTypes } from './vAction.actions';


export const VactionState: Map<string, VAction> = new Map<string, VAction>([]);

export function vActionReducer(state = VactionState, action: VActionActions): Map<string, VAction> {
  switch (action.type) {
    case vActionActionTypes.ADD_VACTION: {
      const currentVaction = (action as AddVaction).payload.vAction;
      const currentAddVactionState = new Map(state);
      currentAddVactionState.set(currentVaction._id, currentVaction);
      console.log('just added ' + currentVaction.name);
      return currentAddVactionState;
    }
    case vActionActionTypes.REMOVE_VACTION: {
      const currentVaction = (action as RemoveVaction).payload.vAction;
      const currentRemoveVactionState = new Map(state);
      currentRemoveVactionState.delete(currentVaction._id);
      console.log('just removed ' + currentVaction.name);
      return currentRemoveVactionState;
    }
    default:
      return state;

  }
}
