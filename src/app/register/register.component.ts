import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Users } from '../models/Users';
import { LoginServices } from '../services/signinservice';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';
import { templateJitUrl } from '@angular/compiler';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  //templateUrl: './popup.component.html',
})
export class RegisterComponent  implements OnInit {
  user: Users = {
    userId:0,
    email: '',
    password:'',
    firstname:'',
    lastname:'',
    dateofbirth:''
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage :any;
  response : any;
  Selecteddate:any;
  Currentdate:any;
  date:any;
  displayStyle = "none";
  Msg='';

  //popup =new AppComponent()
   ngOnInit(): void {
  }
  constructor(private loginservice:LoginServices,private router: Router) { 
    //super();
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
    // if(date1<date2)
    // {
    //   this.user.dateofbirth='';
    //   // this.popup.displayStyle= "block";
    //   //this.popup.openPopup('Date should not be less than system date');
    //   //alert('Date should not be less than system date');
    //   return;
    // }
    if (this.date < 18) {
      this.user.dateofbirth='';
      alert('Players age should be 18years');
      
      //alert('Date should not be less than system date');
      return;
    }
    if(date1<date2)
    {
      this.user.dateofbirth='';
      alert('Date should not be less than system date');
      return;
    }


  }
  openPopup(input:string) {
    console.log(input);
    this.Msg=input;
    console.log(this.Msg);
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  onSubmit(angForm:NgForm){
    if(angForm.invalid){
        return;
    }
    this.loginservice.register(this.user)
    .subscribe(
      response => {
        console.log(response);
        this.errorMessage=response;
        var result=this.errorMessage.result;
        console.log(result);
        
        if(result=="User Account created successfully")
        {
          alert('registeration Sucessful!');
          //this.openPopup('registeration Sucessful!');
          
          this.errorMessage=result;
          this.router.navigate(['/signin']);
        }
        // else(result =="User Account already exists")
        // {
        //   this.isSignUpFailed = true;
        //   this.isSuccessful = false;
        //   this.errorMessage="User Account already exists! Please try with differnt emailid";
        //   this.router.navigate(['/register']);
        // }
        // else if(result =="Error occurred while creating user account")
        // {
        //   this.isSignUpFailed = true;
        //   this.isSuccessful = false;
        //   this.errorMessage=result;
        //   this.router.navigate(['/register']);
        // }
       
        
        
      }
    );
  }
}