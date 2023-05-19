import { createFeature, createReducer, on } from '@ngrx/store';
import { StoreActions } from './store.actions';

export const storeFeatureKey = 'store';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(StoreActions.yStores, state => state),
  on(StoreActions.yStoresSuccess, (state, action) => state),
  on(StoreActions.yStoresFailure, (state, action) => state),
);

export const storeFeature = createFeature({
  name: storeFeatureKey,
  reducer,
});

