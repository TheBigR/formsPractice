import { Action } from '@ngrx/store';
import { MapToolEditors, RequestType } from '../interface/map.interface';
import { GeomtryType } from '../interface/geoJson';
import { Shape } from '../interface/mapDrawings.model';


export enum mapActionTypes {
  BLOCK_DRAW_SHAPE = 'BLOCK_DRAW_SHAPE',
  FINISH_DRAW_SHAPE = 'FINISH_DRAW_SHAPE',
  REGISTER_NEW_MAP = 'REGISTER_NEW_MAP',
  CHANGE_MAP_TOOL = 'CHANGE_MAP_TOOL'
}
export interface RegisterNewMapPayload {mapId: string; }
export class RegisterNewMap implements Action {
  type = mapActionTypes.REGISTER_NEW_MAP;
  constructor(public payload: RegisterNewMapPayload) {}
}

export interface ChangeMapToolPayload {
  mapTool: MapToolEditors;
  requestType: RequestType;
}
export class ChangeMapTool implements Action {
  type = mapActionTypes.CHANGE_MAP_TOOL;
  constructor(public payload: ChangeMapToolPayload) {}
}

export interface FinishDrawShapePayload {
  shapeType: GeomtryType;
  shapeData: Shape;
  requestType: RequestType;
}
export class FinishDrawShape implements Action {
  type = mapActionTypes.FINISH_DRAW_SHAPE;
  constructor(public payload: FinishDrawShapePayload) {}
}

export interface BlockDrawShapePayload {
  mapTool: MapToolEditors;
  mapId: string;
}

export class BlockDrawShape implements Action {
  type = mapActionTypes.BLOCK_DRAW_SHAPE;
  constructor(public payload: BlockDrawShapePayload) {}
}

export type MapActions =
  RegisterNewMap |
  ChangeMapTool |
  FinishDrawShape |
  BlockDrawShape ;

