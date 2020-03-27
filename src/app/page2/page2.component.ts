import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  word : string;
  Bravo : boolean = false;

  VerificationWord(){
    console.log(this.word)
    if ( this.word === "je t'aime par dela la mort" || this.word === "JE T'AIME PAR DELA LA MORT" || this.word === "je t'aime par delà la mort" || this.word === "Je t'aime par delà la mort"  ){
      this.Bravo = true;
    }
  }
}
