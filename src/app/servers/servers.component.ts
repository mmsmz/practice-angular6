import { Component, OnInit } from '@angular/core';

@Component({
//  selector: 'app-servers',
//selector: '[app-servers]', // attributes element
selector: '.app-servers', // select by class element
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created!!';
  }
  onUpdateServerName(event : any){
        // console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;

  }

}
