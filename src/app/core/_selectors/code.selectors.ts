import {createSelector} from '@ngrx/store';

export const selectCodesState = state => state.AppStore;
export const selectCodesQueryState = state => state.AppStore;


export const selectCodes = createSelector(selectCodesState, state => state.codes);
export const selectCodesQuery = createSelector(selectCodesQueryState, state => state.codesQuery);
