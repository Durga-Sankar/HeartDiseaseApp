import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  // url:any='http://43.205.225.85:5000/api/model'
  
  url:any='http://127.0.0.1:5000/api/model'

  constructor(private http:HttpClient){}

  postData(formdata:object){
    return this.http.post(this.url, formdata)
  }
}
