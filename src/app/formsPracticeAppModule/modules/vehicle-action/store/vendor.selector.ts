import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Vendor } from './vendor.model';

export const vendorsStoreKey = 'vendors';
export const getVendorsState = createFeatureSelector<Map<string, Vendor>>(vendorsStoreKey);
export const getVendors = createSelector(getVendorsState, (state: Map<string, Vendor>) => state);
