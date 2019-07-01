import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { VAction } from './vAction.model';
import { VActionInterface } from './vAction.interface';

export const vactionsFeatureKey = 'vactions';
export const vActionSelector: MemoizedSelector<any, VActionInterface> =
  createFeatureSelector<VActionInterface>(vactionsFeatureKey);
export const vActionsSelector =
  createSelector(vActionSelector, ({vActions}: VActionInterface): Map<string, VAction> => vActions);
export const editVactionSelector = createSelector(vActionSelector, ({editVaction}: VActionInterface): VAction => editVaction);

