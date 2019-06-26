import { ActionLocation } from '../../../../../shared/contracts/interfaces/ActionLocation';
import { FuelCompany, FuelType } from '../../../../../shared/contracts/interfaces/Enums';

export class Fueling {
  _id: string;
  name: string;
  description: string;
  date: string;
  mileage: number;
  price: number;
  location: ActionLocation ;
  fuelType: FuelType;
  fuelCompany: FuelCompany;
}



