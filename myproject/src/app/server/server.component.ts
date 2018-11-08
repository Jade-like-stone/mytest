import { Component } from '@angular/core';

@Component({
  selector : '.app-server',
  templateUrl : './server.component.html'
})
export class ServerComponent {
  serverId: number =10;
  serverState: string = '待完成';
   getServerid() {
    return this.serverId;
  }
}
