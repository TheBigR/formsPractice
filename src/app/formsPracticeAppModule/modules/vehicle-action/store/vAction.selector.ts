import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VAction } from './vAction.model';

export const vactionsStoreKey = 'vactions';
export const getVactionsState = createFeatureSelector<Map<string, VAction>>(vactionsStoreKey);
export const getVactions = createSelector(getVactionsState, (state: Map<string, VAction>) => state);
