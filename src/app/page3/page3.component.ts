import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  word : string;
  Bravo : boolean = false;

  VerificationWord(){
    console.log(this.word)
    if ( this.word === "errreur" || this.word === "ERRREUR" || this.word === "Errreur"  ){
      this.Bravo = true;
    }
  }

}
