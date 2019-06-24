import { Fueling } from './fueling.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const fuelingStoreKey = 'fuelings';
export const getFuelingsState = createFeatureSelector<Map<string, Fueling>>(fuelingStoreKey);
export const getFuelings = createSelector(getFuelingsState, (state: Map<string, Fueling>) => state);


