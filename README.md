# Basics

*This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)".  For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .*

# Notes

## 41 - Applying CSS Classes Dynamically with ngClass
- 

## 40 - Styling Elements Dynamically with ngStyle
- [ngStyle]="{color: getColor()}"

## 39 - Enhancing ngIf with an Else Condition
- #noServer is a "local reference"
- *ngIf="serverCreated; else noServer"
<p *ngIf="serverCreated; else noServer"> 
    server was created, server name is <strong>{{ serverName }}</strong>
</p>
<ng-template #noServer>
    <p>
        server not created...waiting...for you to create a server...so please do it...
    </p> 
</ng-template>
## 38 - Using igIf to output data conditionally
- *ngIf="serverCreated"
<p *ngIf="serverCreated"> 
    server was created, server name is <strong>{{ serverName }}</strong>
</p>

## 37 - Directives
directives are instructions in the DOM
<p appTurnGreen>Receives a green bkg</p>
@Directive({
  selector:'[appTurnGreen]'
})
export class TurnGreenDirective{
  ...
}

## Assignment 2 - Practicing Databinding
- https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/practice/268#notes

## 35 - Combining all Forms of Databinding
- servers.component.*

## 34 - Two-Way Databinding
- servers.component.*
- app.module.ts

## 33 - Important: FormsModulee is required for Two-Way Binding!
- changes to app.module.ts
  - added import {FormsModule} from '@angular/forms';
  - added to NgModule imports array: FormsModule

## 32 - Passing & Using Data with Event Binding
- servers.component.*

## 30 - Event Binding
- https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655820#overview
- servers.component.*

## 29 - Property Binding vs String Interpolation
- https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655814#overview
- servers.component.*

## 28 - Property Binding
- servers.component.*

## 27 - String Interpolation
- server.component.*

## Assignment 1: Practicing Components
- (see repo basics-assignment-1)

## 24 - Fully Understanding the Component Selector
- 24.a component as an attribute
- 24.b component as a class

### files...
- servers.component.ts
- app.component.html

## 23 - Working with Component Styles
- notes in app.components.ts

## 22 - Working with Component Templates
- notes in servers.component.ts

## 21 - Creating Components with the CLI & Nesting Components
- ng generate component servers
- or "ng g c servers"
- more notes in servers.component.html

## 20
- module loads into index.html...it's magic!

## 19 - Understanding the Role of AppModule and Component Declaration
- notes found in app.modules.ts

## 18 - Creating A New Component
- notes found in server.component.ts

## 17

### Components
- a key feature in Angular
- you build your app from composing components (which you build on your own)
- ideas for how to compose headers...header, main nav, main body, sidebar, footer
- each component has it's own template, html code and business logic

## 16

### app.component.html 
- the root component for this app 

### index.html 
- a "normal html file" but with one exception...
- <app-root>Loading...</app-root>

### app.component.ts
- @Component decarator...looks like I can change some default stuff here
- selector value matches the app-root tag in index.html
- when I change the tag and the selector value and refresh the page the content loads

### Script Imports
- view source of index.html... 
- <script src="runtime.js" type="module"></script><script src="polyfills.js" type="module"></script><script src="styles.js" defer></script><script src="vendor.js" type="module"></script><script src="main.js" type="module"></script></body>

### main.ts
- first code executed is contained here
- this line bootstraps (starts) our app by passing AppModule...platformBrowserDynamic().bootstrapModule(AppModule)

### app.module.ts
- bootstrap array lists components that should be known to Angular at the time that it analyizes our index.html file...bootstrap: [AppComponent]

# Generated Stuff...

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
