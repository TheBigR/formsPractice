export class Fueling {
  id: number;
  name: string;
  description: string;
  location: {zone: number, location_x: number, location_y: number };
  ellipse: {width: number, length: number, azimuth: number};
  type: string; // {'Vehicle': 1, 'Command post': 2, 'Weapons post': 3};
  classification: string; // {'Top secret': 1, 'Secret': 2, 'Unclassified': 3};
  activity: string; // {'Destroyed': 1, 'Untouched': 2, 'Partially destroyed': 3};
  certaintylevel: string; // {'Low': 1, 'Medium': 2, 'High': 3};
}
