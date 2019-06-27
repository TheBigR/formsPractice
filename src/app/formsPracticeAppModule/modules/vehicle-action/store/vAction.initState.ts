import { VAction } from './vAction.model';
import { VActionInterface } from './vAction.interface';


export const emptyForm: VAction = {
  _id: null,
  name: null,
  date: null,
  description: null,
  type: null,
  vendor: null
};

export const vActionInitState: VActionInterface = {
  vActions: new Map<string, VAction>(),
  editVaction: emptyForm,
};
