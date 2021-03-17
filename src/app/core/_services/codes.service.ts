import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodesService {
  URL_API = 'https://demo0866666.mockable.io/codes';

  constructor(private http: HttpClient) {}

  GetAll(): Observable<string[]>{
    const options = {};
    return this.http.get<string[]>(this.URL_API, options);
  }
}
