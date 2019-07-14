import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {MapStateInterface} from '../interface/map.interface';


export const mapFeatureKey = 'maps';

export const mapsSelector: MemoizedSelector<any, MapStateInterface> =
  createFeatureSelector<MapStateInterface>(mapFeatureKey);

export const selectedMapToolRequestSelector = createSelector(mapsSelector, ({ mapToolRequest }: MapStateInterface) => mapToolRequest);
