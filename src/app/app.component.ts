import { Component, NgModule } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { DialogComponentComponent } from './dialog-component/dialog-component.component'

@NgModule({
  imports: [
    MatDialog,
  ],

  declarations: [
    AppComponent,
    DialogComponentComponent,
  ],
  entryComponents: [
    DialogComponentComponent,
  ],
  
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  title = 'Univercity';

  classes = [
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

  students = [
    {
      "First Name": "Lorem",
      "Last Name": "Phasellus",
      "Address": "Morbi id justo dictum",
      "GPA": 25,
      className: "Class 0"
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

  addClass(){
    const dialogRef = this.dialog.open(DialogComponentComponent,{
      height: '400px',
      width: '600px',
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}