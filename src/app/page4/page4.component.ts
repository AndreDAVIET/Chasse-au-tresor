import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  code : string;
  Bravo : boolean = false;

  VerificationCode(){
    console.log(this.code)
    if ( this.code === "35173" ){
      this.Bravo = true;
    }
  }
}
