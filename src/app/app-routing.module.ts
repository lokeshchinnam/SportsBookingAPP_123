import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { BookingFacilityComponent } from './booking-facility/booking-facility.component';
import { MemberregisterationComponent } from './memberregisteration/memberregisteration.component';

const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'signin',component:SigninComponent},
  {path:'booking-facility',component:BookingFacilityComponent},
  {path:'memberregisteration',component:MemberregisterationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
