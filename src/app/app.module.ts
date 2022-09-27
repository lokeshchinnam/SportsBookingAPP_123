import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookingFacilityComponent } from './booking-facility/booking-facility.component';
import { RegisterComponent } from './register/register.component';
import { MemberregisterationComponent } from './memberregisteration/memberregisteration.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    BookingFacilityComponent,
    RegisterComponent,
    MemberregisterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
