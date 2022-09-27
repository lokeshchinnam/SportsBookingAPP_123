import { Component, OnInit } from '@angular/core';
import { PlayerRegister } from '../models/Player';
import { Registerservices } from '../services/Playerregisteration';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-memberregisteration',
  templateUrl: './memberregisteration.component.html',
  styleUrls: ['./memberregisteration.component.css']
})
export class MemberregisterationComponent implements OnInit {

  isCreateplayerFailed=false;
  players:any={};
  playerslist:any={};
  mr:PlayerRegister={
    id:0,
    PlayerId : 'MS-000002',
    PlayerName: '',
    Email : '',
    Address: '',
    State :'',
    Country :'',
    Pan : '',
    ContactNo : '',
    Dob : '',
  }
  isSuccessful = false;
  isSignUpFailed = false;
  response : any;
  errorMessage = ''
  isEditplayerClicked = false;
  isListplayers = false;
  country:any;
    state:any;
    states:any;
    stateslist:any;
    constructor(private regServices:Registerservices,private router: Router) { }
  
    ngOnInit(): void {
      this.reload();
    }
   
  
    onCodeChange($event:any){
      this.country = $event.target.value;
      // console.log(this.state);
      this.countries(this.country);
      // alert('hello');
    }
    
     countries(country:any) {
      this.regServices.GetStatebasedonCountry(country)
      .subscribe(
        response => {
          console.log(response);
          this.states=response;
          // this.states=this.state.result;
          console.log(this.states);
          
          this.stateslist=this.states.result;
          //   this.reload();
              
          console.log(this.stateslist);
        
         
        }
      );
                     
      
    }
  
    // get states(): string[] | undefined {
    //   return this.map.get(this.country);
    // }

    
    onSubmit(){
      this.regServices.register(this.mr)
      .subscribe(
        response => {
          console.log(response);
          console.log(this.players);
          
          
            this.reload();
              
         
        
         
        }
      );
    }
    reload(){
      this.regServices.GetPlayers()
      .subscribe(
        response => {
          console.log('reload');
          console.log(response);
          console.log(this.players);
          this.players=response;
          this.playerslist=this.players.result;
         
        }
      );
    }
  setPlayerAttributes(updatebook:PlayerRegister)
  {
   this.playerslist=updatebook
  }

  editPlayer(editplayerdetails:PlayerRegister)
  {
    console.log(editplayerdetails)
    this.setPlayerAttributes(editplayerdetails)
    console.log(this.playerslist)
    this.isEditplayerClicked = true
    this.isListplayers = true
  }

  

  onEditPlayer(editplayerdetails:PlayerRegister){
    console.log( editplayerdetails)
    // this.playerslist.PlayerId='MS-000002'
    console.log( editplayerdetails)
    this.regServices.EditPlayer(editplayerdetails).subscribe
    (
      resposne => this.playerslist=resposne
    );
    this.isEditplayerClicked = false
    this.isListplayers = false
    
  }

}
