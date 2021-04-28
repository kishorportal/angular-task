import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountsList(){
    const  headers=new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8'
    })
    const httpOptions = {
      headers:headers
    }
    let url:any=environment.apiUrl+"accounts"
    return this.http.get<any>(url,httpOptions)
      .pipe(map(res=>{
        return res;
      }));
  }



}
