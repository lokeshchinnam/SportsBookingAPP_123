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
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PopupComponent } from './popup/popup.component';
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    BookingFacilityComponent,
    RegisterComponent,
    MemberregisterationComponent,
    NavbarComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
