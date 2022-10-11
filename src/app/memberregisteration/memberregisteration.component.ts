import { Component, OnInit } from '@angular/core';
import { PlayerRegister } from '../models/Player';
import { Registerservices } from '../services/Playerregisteration';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-memberregisteration',
  templateUrl: './memberregisteration.component.html',
  styleUrls: ['./memberregisteration.component.css']
})
export class MemberregisterationComponent implements OnInit {
  config:any;
  p1: number = 1;

 
  isCreateplayerFailed = false;
  players: any = {};
  playerslist: any = {};
  mr: PlayerRegister = {
    id: 0,
    PlayerId: 'MS-000002',
    PlayerName: '',
    Email: '',
    Address: '',
    State: '',
    Country: '',
    Pan: '',
    ContactNo: '',
    Dob: '',
  }
  isSuccessful = false;
  isSignUpFailed = false;
  response: any;
  errorMessage = ''
  isEditplayerClicked = false;
  isListplayers = false;
  country: any;
  state: any;
  states: any;
  stateslist: any;
  Selecteddate: any;
  Currentdate: any;
  date:any;
  updatestateslist:any;
  Isreset=false;
  constructor(private regServices: Registerservices, private router: Router) { 
    // this.config.currentPage=1;
    // this.reload();
    console.log('Constructor');
    console.log(this.playerslist);
    //var length=this.playerslist.length;
    // this.config = {
    //   itemsPerPage: 5,
    //   currentPage: 2,//this.config.currentPage,
    //   totalItems: length
    // };
  }
  
pageChanged($event:any){
  
    this.p1 = $event;
    console.log(this.p1);
  }
  ngOnInit(): void {
    this.checkloggedin();
    this.Isreset=false;
    this.reload();
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
 
  onCodeChange($event: any) {
    this.country = $event.target.value;
    // console.log(this.state);
   this.stateslist= this.countries(this.country);
    // alert('hello');
  }
  onDatechange($event: any) {
    this.Selecteddate = $event.target.value;
    var Selecteddate=new Date(this.Selecteddate);
    var today = new Date();
    this.Currentdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.date=today.getFullYear()-Selecteddate.getFullYear();
    
    const date1 = new Date(this.Currentdate);
    const date2 = new Date(this.Selecteddate);
    const date = new Date();
    //alert(this.date);
    console.log(date);
    if(date1<date2)
    {
      this.mr.Dob='';
      alert('Date should not be less than system date');
      return;
    }
    if (this.date < 18) {
      this.mr.Dob='';
      alert('Players age should be 18years');
      
      //alert('Date should not be less than system date');
      return;
    }
    if(date1<date2)
    {
      this.mr.Dob='';
      alert('Date should not be less than system date');
      return;
    }


  }
  countries(country: any) {
    this.regServices.GetStatebasedonCountry(country)
      .subscribe(
        response => {
          console.log(response);
          this.states = response;
          // this.states=this.state.result;
          console.log(this.states);

          this.stateslist = this.states.result;
          //   this.reload();

          console.log(this.stateslist);
          return this.stateslist;
          //alert(this.stateslist[0]);
        }
      );
      // 
      console.log(this.stateslist);
     

  }

  // get states(): string[] | undefined {
  //   return this.map.get(this.country);
  // }
  reset()
  {
    this.Isreset =true;
    this.mr.PlayerName='';
    this.mr.Email='';
    this.mr.Address='';
    this.mr.State='';
    this.mr.Country='';
    this.mr.Pan='';
    this.mr.ContactNo='';
    this.mr.Dob= '';

  }

  onSubmit() {
    this.regServices.register(this.mr)
      .subscribe(
        response => {
          console.log(response);
          console.log(this.players);

              alert('Player Registeration is Sucessfull!')
               this.reset();
              this.reload();

                 


        }
      );
  }
  reload() {
    this.regServices.GetPlayers()
      .subscribe(
        response => {
          console.log('reload');
          console.log(response);
          console.log(this.players);
          this.players = response;
          this.playerslist = this.players.result;

        }
      );
  }
  setPlayerAttributes(updatebook: PlayerRegister) {
    console.log('inside setatt');
    console.log(updatebook);
    this.playerslist = updatebook;
    // this.country=this.playerslist.country;
    // this.updatestateslist=this.countries(this.country);
     console.log(this.playerslist);
  }

  editPlayer(editplayerdetails: PlayerRegister) {
    this.setPlayerAttributes(editplayerdetails)
    this.country= this.playerslist.country;
    console.log(this.playerslist.country);
    this.stateslist=this.countries(this.playerslist.country);
     console.log(this.stateslist);
    
    console.log(this.playerslist)
    this.isEditplayerClicked = true
    this.isListplayers = true
  }



  onEditPlayer(editplayerdetails: PlayerRegister) {
    console.log(editplayerdetails)
    // this.playerslist.PlayerId='MS-000002'
    console.log(editplayerdetails)
    this.regServices.EditPlayer(editplayerdetails).subscribe
      (
        resposne => this.playerslist = resposne
      );
      console.log(this.playerslist)
    this.isEditplayerClicked = false
    this.isListplayers = false
    alert('Player Updated Sucessfull!')
    this.reload();

  }

}
