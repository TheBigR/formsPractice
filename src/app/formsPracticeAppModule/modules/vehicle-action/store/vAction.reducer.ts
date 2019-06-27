import { AddVaction, RemoveVaction, UpdateEditVaction, VActionActions, vActionActionTypes } from './vAction.actions';
import { vActionInitState } from './vAction.initState';
import { VActionInterface } from './vAction.interface';


export function vActionReducer(state = vActionInitState, action: VActionActions): VActionInterface {
  switch (action.type) {
    case vActionActionTypes.UPDATE_EDIT_VACTION: {
      return {
        ...state,
        editVaction: {
          ...state.editVaction,
          ...(action as UpdateEditVaction).payload.vAction
        }
      };
    }
    case vActionActionTypes.ADD_VACTION: {
      const currentVaction = (action as AddVaction).payload.vAction;
      const currentVactions = state.vActions.set(currentVaction._id, currentVaction);
      console.log('just added ' + currentVaction.name);
      return {
        ...state,
        vActions: currentVactions
      };
    }
    case vActionActionTypes.REMOVE_VACTION: {
      const currentVaction = (action as RemoveVaction).payload.vAction;
      state.vActions.delete(currentVaction._id);
      const currentVactions = state.vActions;
      console.log('just removed ' + currentVaction.name);
      return {
        ...state,
        vActions: currentVactions
      };
    }
    default:
      return state;

  }
}
