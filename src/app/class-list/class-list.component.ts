import { Component, NgModule, ViewContainerRef, OnInit } from '@angular/core';

import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component'
import { StudentsService } from '../students.service';
import { Student } from '../models/student.model';
import { StClass } from '../models/stClass.model';

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

  public students: Student[];

  ngOnInit(): void {
    this.students=this.studentsService.getStudents();
  }
  public classes = [
    new StClass("Class 0","??","??",),
    new StClass("Class 1","??","??",),
    new StClass("Class 2","??","??",),
    new StClass("Class 3","??","??",),
    new StClass("Class 4","??","??",),
  ]
  className: string;
  class: StClass;

  addClass(){
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
      data: {className: this.className}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(!this.classes.some(cl => cl.getClassName() === result)){
        this.classes.push(new StClass(result,"??","??"));
      }
    });
  }

}
