import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {

  selectedName: string;

  names = [
    {value: 'Pour gagner, tu dois dire a André le mot : Saucisson ! Depèche toi !', viewValue: 'Greg'},
    {value: 'Pour gagner, tu dois dire a André le mot : Clavier ! Depèche toi !', viewValue: 'Monica'},
    {value: 'Pour gagner, tu dois dire a André le mot : Mercedes ! Depèche toi !', viewValue: 'Medhi'},
    {value: 'Pour gagner, tu dois dire a André le mot : Coronavirus ! Depèche toi !', viewValue: 'Léo'},
    {value: 'Pour gagner, tu dois dire a André le mot : Bière ! Depèche toi !', viewValue: 'Lisa'},
    {value: 'Pour gagner, tu dois dire a André le mot : Adolf ! Depèche toi !', viewValue: 'Ludivine'},
    {value: 'Pour gagner, tu dois dire a André le mot : Coquinou ! Depèche toi !', viewValue: 'Christian'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
