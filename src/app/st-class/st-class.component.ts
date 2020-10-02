import { Component, Input, ViewContainerRef, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponentComponent } from '../dialog-component/dialog-component.component'
import { StudentComponent } from '../student/student.component';
import { ClassListComponent } from '../class-list/class-list.component';
import { StudentsService } from '../students.service';
import { Student } from '../models/student.model';
import { StClass } from '../models/stClass.model';

@NgModule({
  imports: [
    MatDialog,
  ],

  declarations: [
    DialogComponentComponent,
    StudentComponent,
  ],
  entryComponents: [
    DialogComponentComponent,
  ],

})
@Component({
  selector: 'app-st-class',
  templateUrl: './st-class.component.html',
  styleUrls: ['./st-class.component.scss']
})

export class StClassComponent{
  constructor(private viewContainerRef: ViewContainerRef, public dialog: MatDialog, public warnDialog: MatDialog, private studentsService: StudentsService) { }

  @Input() passedClass: StClass;
  @Input() passedStudents: Student[];

  toggle = false;
  headers = ["First Name", "Last Name", "GPA", ];
  columnTags = ["firstName", "lastName", "gpa", ];
  students: Student[];
  class: StClass;

  ngOnInit(){
    this.class = this.passedClass;
    this.students = this.passedStudents.filter(st => st.getClassName()==this.class.getClassName());
  }

  deleteClass(){
    if(!this.studentsService.getStudents().some(st => st.getClassName() == this.passedClass.getClassName()))
      {
        this.getParentComponent().classes = this.getParentComponent().classes.filter(cl => cl.getClassName().localeCompare(this.passedClass.getClassName()))
      }
      else{
        const dialogWarn = this.dialog.open(StClassComponentDialog, {
          width: '250px',
          data: {className: this.passedClass.getClassName()}
        });
      }
  }

  editClass(){
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
      data: {className: this.passedClass.getClassName()}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getParentComponent().students = this.getParentComponent().students.map(st => {
        if(!st.getClassName().localeCompare(this.passedClass.getClassName())){
          st.setClassName(result);
        }
        return st;
      })

      if(result.localeCompare(this.passedClass.getClassName())){
        this.getParentComponent().classes = this.getParentComponent().classes.map(cl => {
            if(!cl.getClassName().localeCompare(this.passedClass.getClassName())){
            cl.setClassName(result);
            }
            return cl;
          });

        console.log(this.getParentComponent().students);
        this.students = this.passedStudents.filter(st => st.getClassName()==this.class.getClassName());
        console.log(this.students);
      }
    });
    this.getParentComponent().classes;
  }

  deleteStudent(row: Student){
      this.students = this.students.filter(st => {
        return !this.studentsService.compareStudents(st, row);
      })
      this.studentsService.setStudents(this.studentsService.getStudents().filter(st => {
        return !this.studentsService.compareStudents(st, row);
      }))
  }

  getParentComponent(): ClassListComponent {
    return this.viewContainerRef[ '_data' ]
      .componentView.component.viewContainerRef[ '_view' ]
      .component
  }

  toggleStudents() {
    this.toggle = !this.toggle;
  }
}
@Component({
  template: `
  <p>Cannot delete this class</p>
  <button mat-button mat-dialog-close>Okay</button>
  `,
})
export class StClassComponentDialog{}