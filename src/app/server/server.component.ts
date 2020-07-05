import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './server.Component.html',

})
export class ServerComponent {
        serverid: number = 10;
        serverstatus : string = 'offline';

        getServerStatus(){

            return this.serverstatus;
        }
}