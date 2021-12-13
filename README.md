# Notes

## 23 - Working with Component Styles
- 

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

# Background

- I am learning Angular via Udemy.com https://www.udemy.com/course/the-complete-guide-to-angular-2/ 


# Generated Stuff

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

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
