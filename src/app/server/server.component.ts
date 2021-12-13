import { Component } from "@angular/core"; // import the decorator

@Component({ // the decorator
    selector: 'app-server', // implement in html file(s) via <app-server>blah</app-server>...I wonder if <app-server /> works
    templateUrl: './server.component.html' // relative path to template url
}) // decorator

export class ServerComponent{

}