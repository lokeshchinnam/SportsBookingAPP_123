import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  token=localStorage.getItem("token");
  currentusername:any;
  
  
  ngOnInit(): void {
    this.currentusername=localStorage.getItem("currentUserName");
  }

  loggedin(){
    this.currentusername=localStorage.getItem("currentUserName");
    return !!localStorage.getItem('token');
  }
  logout(){
    localStorage.clear();
    this.currentusername=localStorage.getItem("currentUserName");
    localStorage.removeItem('token');

    this.router.navigate(['/signin']);

  }
  checkloggedin(){
    debugger;
    if(localStorage.getItem('token')==null)
    {
      alert("Please login to proceed!")
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/userHome']);
    }
  }

  
  title = 'SportsBookingAPP';
  
   Username= localStorage.getItem("Username");
  constructor( private router: Router){}
  // ngOnInit(): void {
  //   this.Username="";
  // }
  
  getstatus():any{
    return localStorage.getItem("username");
  
  }
  
  // logout(){
  //   this.Username="";
  //   localStorage.setItem("username","");
  //   this.router.navigate(['/signin'])
  // }
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
