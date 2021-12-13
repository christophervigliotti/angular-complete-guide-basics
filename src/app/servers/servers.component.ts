import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  // (22) replace templateUrl...
  // templateUrl: './servers.component.html',
  // (22)...with template (single line template definition using single quotes)...
  // template: '<app-server></app-server>',
  // (22)...or use backticks for multi-line...
  template: `
    this is the template attribute in servers.component.ts...
    <br />
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
