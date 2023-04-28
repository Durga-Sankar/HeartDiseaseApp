import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // signinurl:string='http://43.205.225.85:5000/api/signin'
  // loginurl:string='http://43.205.225.85:5000/api/login'

  signinurl:string='http://127.0.0.1:5000/api/signin'
  loginurl:string='http://127.0.0.1:5000/api/login'


  constructor(private http:HttpClient){}

  signinpostData(formdata:object){
    return this.http.post(this.signinurl, formdata)
  }
  loginpostData(formdata:object){
    return this.http.post(this.loginurl, formdata)
  }
}
