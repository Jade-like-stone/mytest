 import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
 import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    const id=+this.route.snapshot.paramMap.get('id');
    this.server = this.serversService.getServer(id);
    this.route.paramMap
      .subscribe(
      (params:ParamMap)=>{
         this.server = this.serversService.getServer(+params.get('id'));

      }
    )
  }
  toEditServer(){
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'})
  }
}
