import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StClassComponent } from './st-class/st-class.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StClassComponent,
    DialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
