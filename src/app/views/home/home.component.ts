import { Component, OnInit } from '@angular/core';
import {CodesService} from '../../core/_services/codes.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppStoreModel} from '../../core/_models/app-store.model';
import {SetValorAction, SetValorQueryAction} from '../../core/_actions/code.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Buscador por código';
  codes = [];
  loading = false;

  constructor(private codeService: CodesService,
              private router: Router,
              private store: Store<AppStoreModel>
              ) { }

  ngOnInit(): void {

  }

  checkArticleCodes(codes: string[]) {
    this.loading = true;
    this.codeService.GetAll().pipe().subscribe(
      next => {
        // tslint:disable-next-line:prefer-const
        let a = [];
        let b = [];

        codes.forEach((currentValue, index) => {
          if(next.indexOf(currentValue) !== -1){
            a.push(currentValue);
          } else{
            b.push(currentValue);
          }
          });


        const accion = new SetValorAction({
          codes: a,
          codesQuery: b
        });
        this.store.dispatch(accion);
        this.loading = false;
        this.router.navigateByUrl('/result');
      },
      error => {
        this.loading = false;
      });
  }
}
