import { Shape } from './mapDrawings.model';

const zoomDistance = 750000;

export const zoomLevel = {
  z1: new Cesium.DistanceDisplayCondition(zoomDistance),
  z2: new Cesium.DistanceDisplayCondition(0.0, zoomDistance)
};

export enum RequestType {
  search = 'search',
  annotation = 'annotation',
  finding = 'finding',
  none = 'none'
}

export enum MapToolEditors {
  polygon = 'polygon',
  circle = 'circle',
  polyLine = 'polyLine',
  measure = 'measure',
  point = 'point',
  ellipse = 'ellipse',
  none = 'none'
}

export interface MapDesc {
  id: string;
  containerId: number;
  transparentMap: boolean;
}

export interface MapStateInterface {
  mapToolRequest: {
    mapTool: MapToolEditors;
    requestType: RequestType;
  };
}

export interface DrawingState {
  drawings: {
    polygons: DrawingMap
  };
  isShapesDisplayedSelector: boolean;
}

export type DrawingMap = Map<string, Shape>;
