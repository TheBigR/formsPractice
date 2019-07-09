import { DrawingState, MapDesc, MapStateInterface } from '../interface/map.interface';


export const MapInitialState: MapDesc[] = [];

export const mapInitState: MapStateInterface = {
  mapToolRequest: {
    mapTool: null,
    requestType: null
  }
};

export const DrawingsState: DrawingState = {
  drawings: {polygons: new Map()},
  isShapesDisplayedSelector: true
};


