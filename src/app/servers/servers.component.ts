import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  // (22) replace templateUrl...
  // templateUrl: './servers.component.html',
  // (22)...with template (single line template definition using single quotes)...
  // template: '<app-server></app-server>',
  // (22)...or use backticks for multi-line...
  // (22)...using an external file is better if you have multiple lines of code

  // (24) changing the component selector from this...
  // selector: 'app-servers',
  // (24)...to an attribute...
  // selector: '[app-servers]',

  // (28)
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  // properties
  allowNewServer = false;
  serverCreationStatus = 'No server was created...sorry, Charlie!'; // (30)
  serverName = '(34) this is the default value of serverName ';

  //methods 
  constructor() {
    setTimeout(
      () => {
        this.allowNewServer = true;
      }, 
      2000
    );
   }
  ngOnInit(): void {
  }

  // (30)
  onCreateServer(){
    this.serverCreationStatus = 'Server "' + this.serverName + '" was created.';
  }

  // (32)
  onUpdateServerName(event: any){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
