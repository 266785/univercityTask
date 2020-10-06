import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatDialogModule,} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WarningDialog, UniversityClassComponent} from './component/student-list/university-class.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UniversityClassDialogComponent} from './component/dialog-component/university-class-dialog.component';
import {StudentComponent} from './component/student/student.component';
import {ClassListComponent} from './component/class-list/class-list.component';
import {StudentsService} from './students.service';


@NgModule({
  declarations: [
    AppComponent,
    UniversityClassComponent,
    UniversityClassDialogComponent,
    WarningDialog,
    StudentComponent,
    ClassListComponent,
  ],
  imports: [
    MatDialogModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    UniversityClassDialogComponent,
    WarningDialog
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
