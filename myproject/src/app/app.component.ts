import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles : [
    `h1{ color : red;}`
  ]
})
export class AppComponent{
  title = 'Angle';
  allow=true;
  constructor(){
setTimeout(function () {
    return this.allow=false;
},2000)
  }
}
