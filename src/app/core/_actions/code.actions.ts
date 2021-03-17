import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {AppStoreModel} from '../_models/app-store.model';


export enum CodeActionsType {
  SETCODE = '[Asignar valor de nube]',
  SETCODEQUERY = '[Asignar valor de nube]'
}


export class SetValorAction implements Action {
  readonly type = CodeActionsType.SETCODE;
  constructor(public payload: AppStoreModel ) {
  }
}

export class SetValorQueryAction implements Action {
  readonly type = CodeActionsType.SETCODEQUERY;
  constructor(public payload: string[] ) {
  }
}

export type CodeActions = SetValorAction
  | SetValorQueryAction;
