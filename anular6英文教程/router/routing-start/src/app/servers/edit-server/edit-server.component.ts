import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;

  constructor(private serversService: ServersService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParamMap.keys)
    this.route.queryParamMap.subscribe(
      (queryParamMap:ParamMap)=>{
        this.allowEdit=queryParamMap.get('allowEdit') === '1';
      }
    )
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
