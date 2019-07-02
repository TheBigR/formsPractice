import { VAction } from './vAction.model';


export interface VActionInterface {
  vActions: Map<string, VAction>;
  editVaction: VAction;
  isVactionFormEdit: boolean;
}
