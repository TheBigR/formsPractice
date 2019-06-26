import { VactionType } from '../../../../../shared/contracts/interfaces/Enums';


export class VAction {
  _id: string;
  name: string;
  type: VactionType;
  description: string;
  date: string;
  vendor: string;
}
