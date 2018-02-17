import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  //every component, directive, pipe created must belong to only one angular module; they are private by default
  //module provides template resolutions env for its component templates
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  //allows to import modules which export modules needed. any exported components, directives, pipes are available
  //import what needed, imports are not inherited, 
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  //any service is registered at the root of the application, do not add into shared modules,
  //build a core module for services and import it once, guard services have to be at the module
  providers: [HttpClientModule],
  //bootstrap array must contain only one component. which is the starter component for the app
  //only root module should have this array.
  bootstrap: [AppComponent]
  //exports array of the decorator exports modules mentioned here, any component, directives, pipes
  //re-export something without importing; never export a service (they are already shared throughout the app)
})

export class AppModule { }
