import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
