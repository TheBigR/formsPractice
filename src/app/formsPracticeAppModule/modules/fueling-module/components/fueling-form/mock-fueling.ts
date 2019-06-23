import {Fueling} from './fueling.model';

export const FUELINGS: Fueling[] = [
  {
    id: 1,
    name: 'pre jeepolog fueling',
    description: 'The fueling before the jeepolog anual meeting. ',
    location: {zone: 12, location_x: 555, location_y: 4576457},
    ellipse: {width: 453, length: 33, azimuth: 43},
    type: 'Diesel',
    classification: 'Dor-Alon',
    activity: 'Full',
    certaintylevel: 'High'
  },
  {
    id: 2,
    name: 'weekly fueling',
    description: 'just a weekly fueling. ',
    location: {zone: 12, location_x: 551, location_y: 4576422},
    ellipse: {width: 453, length: 33, azimuth: 43},
    type: 'Diesel',
    classification: 'Ten',
    activity: 'Full',
    certaintylevel: 'High'
  }
];
