import { VendorType } from '../../../../../shared/contracts/interfaces/Enums';

export class Vendor {
  _id: string;
  name: string;
  vendorType: VendorType;
  address?: string;
  tel?: number;
  email?: string;
}
