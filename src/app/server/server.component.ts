import { Component } from "@angular/core"; // import the decorator

@Component({ // the decorator
    selector: 'app-server', // implement in html file(s) via <app-server>blah</app-server>...I wonder if <app-server /> works
    templateUrl: './server.component.html' // relative path to template url
}) // decorator

export class ServerComponent{
    /* 
    (25) you can specify datatypes but Angular does not require it
    serverId: number = 10;
    serverStatus: string = 'offline';
    */
    serverId = 10;
    serverStatus = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}