import {Action} from '@ngrx/store';
import {AppStoreModel} from '../_models/app-store.model';
// NGRX
import { createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import {CodeActions, CodeActionsType} from '../_actions/code.actions';

const initialState = {
  codes: [] as string[],
  codesQuery: [] as string[]
};

export function codeReducer(state = initialState, action: CodeActions): AppStoreModel{
 switch (action.type ){
   case CodeActionsType.SETCODE:
     return action.payload as AppStoreModel;
   default:
     return state;
 }
}
