import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PagerateComponent } from './pagerate/pagerate.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';


const routes: Routes = [
  {path :"", component : HomepageComponent},
  {path :"1", component : Page1Component},
  {path :"2", component : PagerateComponent},
  {path :"3", component : PagerateComponent},
  {path :"211", component : Page2Component},
  {path :"384", component : Page3Component},
  {path :"455", component : Page4Component},
  {path :"503", component : Page5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
