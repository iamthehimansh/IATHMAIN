import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {NavComponent} from "./nav.component"
import {BoxComponent} from "./box.component"

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    {
       path: 'new-cmp',
       component: NavComponent
    },
    {
      path: '',
      component: BoxComponent
   }
 ]) ],
  declarations: [ AppComponent ,NavComponent,BoxComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
