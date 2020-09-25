import { Component, NgModule, ViewContainerRef } from '@angular/core';

import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component'


export interface inputClass {
  className: String,
  subjects: String,
  department: String,
}

@NgModule({
  imports: [
    MatDialog,
  ],
  declarations: [
    ClassListComponent,
    DialogComponentComponent,
  ],
  entryComponents: [
    DialogComponentComponent,
  ],
  
})

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})

export class ClassListComponent{

  constructor(public dialog: MatDialog, private viewContainerRef: ViewContainerRef) {}

 

  public classes = [
    {
      className: "Class 0",
      subjects: "??",
      department: "??",
    },
    {
      className: "Class 1",
      subjects: "??",
      department: "??",
    },
    {
      className: "Class 2",
      subjects: "??",
      department: "??",
    },
    {
      className: "Class 3",
      subjects: "??",
      department: "??",
    },
    {
      className: "Class 4",
      subjects: "??",
      department: "??",
    },
  ]

  public students = [
    {
      firstName: "Lorem",
      lastName: "Phasellus",
      address: "Morbi id justo dictum",
      gpa: 25,
      className: "Class 1"
    },
    {
      firstName: "Vivamus",
      lastName: "Quisque",
      address: "Sed hendrerit enim",
      gpa: 30,
      className: "Class 1"
    },
    {
      firstName: "Fusce",
      lastName: "Curabitur",
      address: "Vestibulum molestie lacus ac",
      gpa: 21,
      className: "Class 1"
    },
    {
      firstName: "Praesent",
      lastName: "Aenean",
      address: "Ut iaculis ipsum sit amet nisl",
      gpa: 17,
      className: "Class 2"
    },
    {
      firstName: "Lorem",
      lastName: "Phasellus",
      address: "Morbi id justo dictum",
      gpa: 25,
      className: "Class 1"
    },
    {
      firstName: "Vivamus",
      lastName: "Quisque",
      address: "Sed hendrerit enim",
      gpa: 30,
      className: "Class 0"
    },
    {
      firstName: "Fusce",
      lastName: "Curabitur",
      address: "Vestibulum molestie lacus ac",
      gpa: 21,
      className: "Class 1"
    },
    {
      firstName: "Praesent",
      lastName: "Aenean",
      address: "Ut iaculis ipsum sit amet nisl",
      gpa: 17,
      className: "Class 2"
    },
    {
      firstName: "Lorem",
      lastName: "Phasellus",
      address: "Morbi id justo dictum",
      gpa: 25,
      className: "Class 3"
    },
    {
      firstName: "Vivamus",
      lastName: "Quisque",
      address: "Sed hendrerit enim",
      gpa: 30,
      className: "Class 1"
    },
    {
      firstName: "Fusce",
      lastName: "Curabitur",
      address: "Vestibulum molestie lacus ac",
      gpa: 21,
      className: "Class 0"
    },
    {
      firstName: "Praesent",
      lastName: "Aenean",
      address: "Ut iaculis ipsum sit amet nisl",
      gpa: 17,
      className: "Class 1"
    },
    {
      firstName: "Lorem",
      lastName: "Phasellus",
      address: "Morbi id justo dictum",
      gpa: 25,
      className: "Class 2"
    },
    {
      firstName: "Vivamus",
      lastName: "Quisque",
      address: "Sed hendrerit enim",
      gpa: 30,
      className: "Class 2"
    },
    {
      firstName: "Fusce",
      lastName: "Curabitur",
      address: "Vestibulum molestie lacus ac",
      gpa: 21,
      className: "Class 2"
    },
    {
      firstName: "Praesent",
      lastName: "Aenean",
      address: "Ut iaculis ipsum sit amet nisl",
      gpa: 17,
      className: "Class 0"
    },

  ];


  className: string;
  class: inputClass;

  addClass(){
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
      data: {className: this.className}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(!this.classes.some(cl => cl.className === result)){
        this.classes.push({
          className: result,
          subjects: "??",
          department: "??",
        },)
      }

    });
  }

}
