import { ActionLocation } from '../../../../../shared/contracts/interfaces/ActionLocation';

export class Fueling {
  _id: number;
  name: string;
  description: string;
  date: string;
  mileage: number;
  price: number;
  location: ActionLocation ;
  fuelType: string; // {'Vehicle': 1, 'Command post': 2, 'Weapons post': 3};
  classification: string; // {'Top secret': 1, 'Secret': 2, 'Unclassified': 3};
  activity: string; // {'Destroyed': 1, 'Untouched': 2, 'Partially destroyed': 3};
  certaintylevel: string; // {'Low': 1, 'Medium': 2, 'High': 3};
}



