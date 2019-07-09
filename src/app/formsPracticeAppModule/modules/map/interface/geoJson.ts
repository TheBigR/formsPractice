export enum GeomtryType {
  Circle = 'Circle',
  Polygon = 'Polygon',
  Point = 'Point',
  Polyline = 'Polyline'
}

export interface GeoJsonInterface {
  type: GeomtryType;
  coordinates: position | position[] | position [][];
}

export class GeoJson implements GeoJsonInterface {
  constructor(public type: GeomtryType, public coordinates: position | position[] | position[][]) {}
}

export type position = number[];
