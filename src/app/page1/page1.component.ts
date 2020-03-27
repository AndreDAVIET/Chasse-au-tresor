import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  name : string;
  Bravo : boolean = false;

  VerificationName(){
    console.log(this.name)
    if ( this.name === 'ELISE' ){
      this.Bravo = true;
    }
  }

}
