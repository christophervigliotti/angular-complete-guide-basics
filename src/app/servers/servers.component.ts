import { Component, OnInit } from '@angular/core';

@Component({
  // (24) changing the component selector from this...
  // selector: 'app-servers',
  // (24)...to an attribute...
  selector: '[app-servers]',

  // (22) replace templateUrl...
  // templateUrl: './servers.component.html',
  // (22)...with template (single line template definition using single quotes)...
  // template: '<app-server></app-server>',
  // (22)...or use backticks for multi-line...
  template: `
    <!--app-roottemplate attribute in servers.component.ts...-->
    <app-server></app-server>
    <app-server></app-server>`,
  // (22)...using an external file is better if you have multiple lines of code

styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
