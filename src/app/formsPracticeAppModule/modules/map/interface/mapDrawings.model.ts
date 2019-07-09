import { GeoJsonInterface } from './geoJson';

export enum DRAWSTATE {
  edit = 'EDIT',
  disabled = 'DISABLED',
  start = 'START'
}

export interface Shape {
  id?: string;
  geoJ: GeoJsonInterface;
}
