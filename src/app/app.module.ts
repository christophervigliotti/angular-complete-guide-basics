import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; // (19) add serverComponent here...
import { ServersComponent } from './servers/servers.component'; 

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, // (19)...and here
    ServersComponent 
  ],
  imports: [
    BrowserModule
    /*,
    FormsModule
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
