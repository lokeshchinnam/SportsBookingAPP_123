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
  constructor(private Groundservices:Groundservices,private router: Router) { }

  ngOnInit(): void {
  }
  ondrpGroundChange($event:any){
    this.mr.GroundName = $event.target.value;
    console.log( this.mr.GroundName);
  }

  onDateChange($event:any)
  {
    this.mr.Bookeddate=$event.target.value;
    // var today = new Date();
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // console.log(date);
    // if(date < this.mr.Bookeddate)
    // {
    //       alert('Date should not be less than system date');
    //       this.mr.Bookeddate='';
    //       return;
    // }
    //this.mr.Bookeddate=$event.target.value;
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
        alert('hello');
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
