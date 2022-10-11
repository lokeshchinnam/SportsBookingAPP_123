import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkloggedin();
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
    this.router.navigate(['/signin']);
  }
  Createredirect(){
    
      this.router.navigate(['/signin']);
   
    
  }
  Bookredirect()
  {
    this.router.navigate(['/booking-facility']);
  }
}
