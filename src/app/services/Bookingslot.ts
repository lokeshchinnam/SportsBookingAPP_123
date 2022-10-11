import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingFacilityComponent } from '../booking-facility/booking-facility.component';
import { Grounddetails } from '../models/Grounddetails';
@Injectable({
    providedIn: 'root'
  })

  export class Groundservices{
    baseUrl = 'https://localhost:7106/Players/SlotBooking'
    GetURL='https://localhost:7106/Players/GetAvailableSlots'
    // baseUrl = 'https://sportsfacilitybookingapp20220926181520.azurewebsites.net/Players/SlotBooking'
    // GetURL='https://sportsfacilitybookingapp20220926181520.azurewebsites.net/Players/GetAvailableSlots/'
    constructor(private http: HttpClient) { }

    SlotBooking(mr :Grounddetails): Observable<Grounddetails> {
        return this.http.post<Grounddetails>(this.baseUrl, mr);
      }
      GetAvailableSlots(Groundname:string,Bookeddate:any): Observable<any> {
       
        let params = {'Groundname': Groundname,'Bookeddate':Bookeddate }
        let queryParams = new HttpParams({fromObject:params})
         
          return this.http.get<any>(this.GetURL,{params : queryParams});
      }
      
  }