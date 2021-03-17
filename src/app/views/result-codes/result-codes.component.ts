import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppStoreModel} from '../../core/_models/app-store.model';
import {Observable} from 'rxjs';
import {selectCodes, selectCodesQuery} from '../../core/_selectors/code.selectors';
export interface AppStore {
  codes: string[];
  codesQuery: string[];
}

@Component({
  selector: 'app-result-codes',
  templateUrl: './result-codes.component.html',
  styles: [
  ]
})
export class ResultCodesComponent implements OnInit {
  Codes: string[] = [];
  CodesQ: string[] = [];

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.store.pipe(select(selectCodes)).subscribe(
     next => {this.Codes = next;}
    );
    this.store.pipe(select(selectCodesQuery)).subscribe(
      next => {this.CodesQ = next;}
    );

  }

}

