import { Fueling } from './fueling.model';
import { FuelingActions, fuelingActionTypes } from './fueling.actions';


export const FuelingState: Map<string, Fueling> = new Map<string, Fueling>([]);
export function fuelingReducer(state = FuelingState, action: FuelingActions): Map<string, Fueling> {
  switch (action.type) {
    case fuelingActionTypes.ADD_FUELING: {
      return state;
    }
    default:
      return state;
  }
}

