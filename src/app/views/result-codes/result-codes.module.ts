import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCodesComponent } from './result-codes.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';



@NgModule({
  declarations: [ResultCodesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ResultCodesComponent,
      },
    ]),
  ]
})
export class ResultCodesModule { }
