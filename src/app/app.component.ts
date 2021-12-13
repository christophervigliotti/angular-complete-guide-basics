import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // (23) commenting this out...
  // styleUrls: ['./app.component.css']
  // (23) and replacing it with the styles attribute...
  styles:[`
    h3{
      color:orange;
    }
  `]
  // (23)...but if you have a decent amount of code in here it is better to use an external file
})
  export class AppComponent {  
  /*
  name = 'Sunshine Pug';
  title = 'App Titles Are Boring';
  */
}
