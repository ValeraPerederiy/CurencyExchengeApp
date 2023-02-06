import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface curencyToUah{
  ccy:string
  base_ccy:string
  buy:string
  sale:string
}

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor(private http:HttpClient) { }

  public getCurency(value1:string, value2:string):Observable<any>{
    return this.http.get(`https://v6.exchangerate-api.com/v6/2a135c6de1b1f59e5a6f99cd/pair/${value1}/${value2}`)
  }
}
