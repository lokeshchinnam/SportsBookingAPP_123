import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerRegister } from '../models/Player';
@Injectable({
    providedIn: 'root'
  })

  export class Registerservices{
    // baseUrl = 'https://sportsfacilitybookingapp20220926181520.azurewebsites.net/Players/CreatePlayer'
    // GetURL='https://sportsfacilitybookingapp20220926181520.azurewebsites.net/Players/GetPlayers'
    // EditURL='https://sportsfacilitybookingapp20220926181520.azurewebsites.net/Players/UpdatePlayerDetails'
    // GetStatebasedonCountryURL='https://sportsfacilitybookingapp20220926181520.azurewebsites.net/Players/GetStatebasedonCountry'
    baseUrl = 'https://localhost:7106/Players/CreatePlayer'
    GetURL='https://localhost:7106/Players/GetPlayers'
    EditURL='https://localhost:7106/Players/UpdatePlayerDetails'
    GetStatebasedonCountryURL='https://localhost:7106/Players/GetStatebasedonCountry'
    constructor(private http: HttpClient) { }

    register(mr : PlayerRegister): Observable<PlayerRegister> {
        return this.http.post<PlayerRegister>(this.baseUrl, mr);
      }
      GetPlayers(): Observable<any> {
        return this.http.get<PlayerRegister>(this.GetURL);
      }
      EditPlayer(mr : PlayerRegister): Observable<any> 
      {
       return this.http.put<any>(this.EditURL,mr);
      }
      GetStatebasedonCountry(country:string): Observable<any> {
      //   let queryParams = new HttpParams()
      //  queryParams = queryParams.append('country', country)
       let params = {'country': country }
      let queryParams = new HttpParams({fromObject:params})
       
        return this.http.get<any>(this.GetStatebasedonCountryURL,{params : queryParams});
      }
  }