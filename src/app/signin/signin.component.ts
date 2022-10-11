  import { ActivatedRoute, Router } from '@angular/router';
  import { Component, OnInit } from '@angular/core';
  import { Credentials } from '../models/credentials';
  import { LoginServices } from '../services/signinservice';
  
  
  @Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
  })
  export class SigninComponent implements OnInit {
  
    cred : Credentials = {
      userName : '',
      password : ''
    };
    userRole: string | null = ''
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    result : any;
    constructor(private loginservice : LoginServices, private router: Router){}
  
    ngOnInit(): void {
    }
    redirect(){
      this.router.navigate(['/register']);
      //this.router.navigate(['/booking-facility']);
    }
  onSubmit(){
    console.log(this.cred.userName);
    if(this.cred.userName!='' && this.cred.password!=''){
      this.loginservice.login(this.cred)
      .subscribe(
        response => {
          console.log(response);
          this.result = response;
          localStorage.setItem("token",this.result.token);
          localStorage.setItem('currentUserName',this.result.username);
          if(this.result.token=='')
          {
            console.log("errorMessage");
            // alert('Login Failed')
            this.errorMessage='Login Failed';
            return;
          }
          else{
            
              this.router.navigate(['/navbar']);
           
          }
        }
      )
    }
  }
  displayStyle = "none";
  Msg='';
  
  openPopup(input:string) {
    console.log(input);
    this.Msg=input;
    console.log(this.Msg);
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }



}
