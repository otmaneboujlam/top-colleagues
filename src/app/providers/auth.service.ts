import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  connection = (login : Login)=> {
    return this.http.post<any>("https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/login", login,{
      headers: new HttpHeaders({
      "Content-Type": "application/json"
      })
    })
  }

  //isLoggedIn = () => {
  //  return this.http.get<any>("https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/current_user");
  //}

}
