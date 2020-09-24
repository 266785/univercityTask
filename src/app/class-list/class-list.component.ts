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

  getParentComponent(): ClassListComponent {
    return this.viewContainerRef[ '_data' ]
      .componentView.component.viewContainerRef[ '_view' ]
      .component
  }

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
      "First Name": "Lorem",
      "Last Name": "Phasellus",
      "Address": "Morbi id justo dictum",
      "GPA": 25,
      className: "Class 1"
    },
    {
      "First Name": "Vivamus",
      "Last Name": "Quisque",
      "Address": "Sed hendrerit enim",
      "GPA": 30,
      className: "Class 1"
    },
    {
      "First Name": "Fusce",
      "Last Name": "Curabitur",
      "Address": "Vestibulum molestie lacus ac",
      "GPA": 21,
      className: "Class 1"
    },
    {
      "First Name": "Praesent",
      "Last Name": "Aenean",
      "Address": "Ut iaculis ipsum sit amet nisl",
      "GPA": 17,
      className: "Class 2"
    },
    {
      "First Name": "Lorem",
      "Last Name": "Phasellus",
      "Address": "Morbi id justo dictum",
      "GPA": 25,
      className: "Class 1"
    },
    {
      "First Name": "Vivamus",
      "Last Name": "Quisque",
      "Address": "Sed hendrerit enim",
      "GPA": 30,
      className: "Class 0"
    },
    {
      "First Name": "Fusce",
      "Last Name": "Curabitur",
      "Address": "Vestibulum molestie lacus ac",
      "GPA": 21,
      className: "Class 1"
    },
    {
      "First Name": "Praesent",
      "Last Name": "Aenean",
      "Address": "Ut iaculis ipsum sit amet nisl",
      "GPA": 17,
      className: "Class 2"
    },
    {
      "First Name": "Lorem",
      "Last Name": "Phasellus",
      "Address": "Morbi id justo dictum",
      "GPA": 25,
      className: "Class 3"
    },
    {
      "First Name": "Vivamus",
      "Last Name": "Quisque",
      "Address": "Sed hendrerit enim",
      "GPA": 30,
      className: "Class 1"
    },
    {
      "First Name": "Fusce",
      "Last Name": "Curabitur",
      "Address": "Vestibulum molestie lacus ac",
      "GPA": 21,
      className: "Class 0"
    },
    {
      "First Name": "Praesent",
      "Last Name": "Aenean",
      "Address": "Ut iaculis ipsum sit amet nisl",
      "GPA": 17,
      className: "Class 1"
    },
    {
      "First Name": "Lorem",
      "Last Name": "Phasellus",
      "Address": "Morbi id justo dictum",
      "GPA": 25,
      className: "Class 2"
    },
    {
      "First Name": "Vivamus",
      "Last Name": "Quisque",
      "Address": "Sed hendrerit enim",
      "GPA": 30,
      className: "Class 2"
    },
    {
      "First Name": "Fusce",
      "Last Name": "Curabitur",
      "Address": "Vestibulum molestie lacus ac",
      "GPA": 21,
      className: "Class 2"
    },
    {
      "First Name": "Praesent",
      "Last Name": "Aenean",
      "Address": "Ut iaculis ipsum sit amet nisl",
      "GPA": 17,
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
