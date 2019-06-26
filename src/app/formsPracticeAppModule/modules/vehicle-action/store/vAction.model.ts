import { VactionType } from '../../../../../shared/contracts/interfaces/Enums';
import { Vendor } from './vendor.model';


export class VAction {
  _id: string;
  name: string;
  type: VactionType;
  description: string;
  date: string;
  vendor: Vendor;
}
