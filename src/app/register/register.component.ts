import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Users } from '../models/Users';
import { LoginServices } from '../services/signinservice';
import { Form, FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  constructor(private loginservice:LoginServices,private router: Router) { }

  ngOnInit(): void {
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
          alert('registeration Sucessful!')
          this.errorMessage=result;
          this.router.navigate(['/memberregisteration']);
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