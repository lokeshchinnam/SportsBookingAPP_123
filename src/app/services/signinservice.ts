import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
 import { Users } from '../models/Users';

@Injectable({
    providedIn: 'root'
  })
  
  export class LoginServices{
    //baseUrl= 'https://authentication20220926170119.azurewebsites.net/Authentication'
     baseUrl='https://localhost:7224/Authentication'
     registerUrl ='https://localhost:7106/Players/CreateAccount'
     //registerUrl ='https://sportsfacilitybookingapp20220926181520.azurewebsites.net/Players/CreateAccount'
    constructor(private http: HttpClient) { }

    login(credential : Credentials):Observable<Credentials[]>{
        console.log('Login')
        return this.http.post<any>(this.baseUrl, credential );
  }

  register(user : Users): Observable<Users> {
    console.log('inside service');
     return this.http.post<Users>(this.registerUrl, user);
   }
}