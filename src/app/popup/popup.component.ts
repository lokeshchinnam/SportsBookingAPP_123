import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
