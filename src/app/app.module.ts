import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatDialogModule,} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StClassComponent } from './st-class/st-class.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { StClassComponentDialog } from './st-class/st-class.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    StClassComponent,
    DialogComponentComponent,
    StClassComponentDialog,
    StudentComponent,
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    DialogComponentComponent,
    StClassComponentDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
