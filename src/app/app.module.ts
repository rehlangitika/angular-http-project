import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routes} from './app.routes'
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms'
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {HttpModule} from "@angular/http";
@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, RouterModule.forRoot(routes), HttpModule ],
  declarations: [ AppComponent, HomeComponent, LoginComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
