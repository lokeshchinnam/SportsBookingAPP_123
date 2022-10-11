import { Component, OnInit } from '@angular/core';
import { Grounddetails } from '../models/Grounddetails'; 
import { Groundservices } from '../services/Bookingslot';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-booking-facility',
  templateUrl: './booking-facility.component.html',
  styleUrls: ['./booking-facility.component.css']
})
export class BookingFacilityComponent implements OnInit {
  p1: number = 1;
  pagenumber:number=1;
  mr:Grounddetails={
    GroundName:'',
    Bookeddate: '',
    SlotBookingtime: ''
  }
  Availableslotlist=['6-7AM','7-8AM','8-9AM','9-10AM','10-11AM','11-12AM','12-1PM','1-2PM','2-3PM','3-4PM','4-5PM','5-6PM'];
  slotbookinglist:any;
  slotbookinggroundslist:any;
  Isclicked :any;
  Sucessmsg:any;
  Selecteddate:any;
  Currentdate:any;
  constructor(private Groundservices:Groundservices,private router: Router) { }
  pageChanged($event:any){
  
    this.p1 = $event;
    console.log(this.p1);
  }
  // onpageChanged($e:any){
  
  //   this.pagenumber = $e;
  //   console.log(this.p1);
  // }
  ngOnInit(): void {
    this.checkloggedin()
  }
  checkloggedin(){
    if(localStorage.getItem('token')==null)
    {
      this.router.navigate(['/signin']);
      return false;
    }
    else{

      return true;
    }
  }
  backtonav(){
    this.router.navigate(['/navbar']);
  }
  ondrpGroundChange($event:any){
    this.mr.GroundName = $event.target.value;
    this.Availableslotlist=['6-7AM','7-8AM','8-9AM','9-10AM','10-11AM','11-12AM','12-1PM','1-2PM','2-3PM','3-4PM','4-5PM','5-6PM'];
    console.log( this.mr.GroundName);
  }

  onDateChange($event:any)
  {
    this.mr.Bookeddate=$event.target.value;
    this.Selecteddate = $event.target.value;
    var today = new Date();
    this.Currentdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var date = this.Currentdate - this.Selecteddate;
    const date1 = new Date(this.Currentdate);
    const date2 = new Date(this.Selecteddate);
    console.log(date);
    
    if(date1>date2)
    {
      this.mr.Bookeddate='';
      alert('Date should not be less than system date');
      return;
    }
    console.log( this.mr.Bookeddate);
  }
  SlotBooking(slottime:any){
   this.mr.SlotBookingtime=slottime;
    var selectedslot=this.mr.SlotBookingtime;
    this.mr.SlotBookingtime=selectedslot;
    console.log(selectedslot);
    this.Groundservices.SlotBooking(this.mr)
    .subscribe(
      response => {
        console.log(response);
        this.Sucessmsg=response;
       // alert('hello');
        alert(this.Sucessmsg.result);
        this.GetAvailableSlots()
         // this.reload();
            
      }
    );
  }
  GetAvailableSlots(){
    this.Isclicked=true;
    console.log(this.Availableslotlist);
    this.Groundservices.GetAvailableSlots(this.mr.GroundName,this.mr.Bookeddate)
    .subscribe(
      response => {
        
        console.log(response);
        console.log(this.Availableslotlist);
        
        this.slotbookinglist=response;
        this.slotbookinggroundslist=this.slotbookinglist.result;
        if(this.slotbookinggroundslist.length > 0)
        {
          for(var i=0;i<this.Availableslotlist.length;i++)
          {
              for(var j=0;j<this.slotbookinggroundslist.length;j++)
              {
                if(this.Availableslotlist[i] == this.slotbookinggroundslist[j].slotBookingtime)
                {
                   this.Availableslotlist.splice(i,1);
                }
              }
          }

        }
       

       
      }
    );
  }



}
