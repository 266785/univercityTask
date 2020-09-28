import { Component, NgModule, ViewContainerRef, OnInit } from '@angular/core';

import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component'
import { StudentsService } from '../students.service';


export interface inputClass {
  className: String,
  subjects: String,
  department: String,
}
export interface student {
  firstName: string,
  lastName: string,
  address: string,
  gpa: number,
  className: string,
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

export class ClassListComponent implements OnInit{

  constructor(public dialog: MatDialog, private viewContainerRef: ViewContainerRef, private studentsService: StudentsService) {}

  public students: student[];

  ngOnInit(): void {
    this.students=this.studentsService.getStudents();
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
