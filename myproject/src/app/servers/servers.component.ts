import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template : '<app-server></app-server>' ,
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowBtn = true;
  constructor() {
     setTimeout(() => {
       this.allowBtn = false;
     }, 5 );
    }

  ngOnInit() {
  }

}
