import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  //function
  singUP(body:any){
    return this.http.post('http://localhost:3000/signup ',body)
  }

  login(body:any){
    return this.http.post('http://localhost:3000/login ',body)
  }

}
