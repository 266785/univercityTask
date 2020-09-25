import { Component, Input, ViewContainerRef, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component'
import { StudentComponent } from '../student/student.component';
import { ClassListComponent } from '../class-list/class-list.component';

export interface inputClass {
  className: string,
  subjects: string,
  department: string,
}
export interface inputStudents {
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
  constructor(private viewContainerRef: ViewContainerRef, public dialog: MatDialog, public warnDialog: MatDialog) { }

  @Input() passedClass: inputClass;
  @Input() passedStudents: inputStudents[];

  toggle = false;
  headers = ["First Name", "Last Name", "GPA", ];
  columnTags = ["firstName", "lastName", "gpa", ];
  students: inputStudents[];
  class: inputClass;

  ngOnInit(){
    this.class = this.passedClass;
    this.students = this.passedStudents.filter(st => st.className==this.class.className);
  }

  hideClasses(){
    
  }

  deleteClass(){
    if(!this.getParentComponent().students.some(st => st.className == this.passedClass.className))
      {
        this.getParentComponent().classes = this.getParentComponent().classes.filter(cl => cl.className.localeCompare(this.passedClass.className))
      }
      else{
        const dialogWarn = this.dialog.open(StClassComponentDialog, {
          width: '250px',
          data: {className: this.passedClass.className}
        });
      }
  }

  editClass(){
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
      data: {className: this.passedClass.className}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getParentComponent().students = this.getParentComponent().students.map(st => {
        console.log(`inside students ${st.className} : ${this.passedClass.className}`)
        if(!st.className.localeCompare(this.passedClass.className)){
          console.log("changing")
          st.className = result;
        }
        return st;
      })

      if(result.localeCompare(this.passedClass.className)){
        this.getParentComponent().classes = this.getParentComponent().classes.map(cl => {
            if(!cl.className.localeCompare(this.passedClass.className)){
            cl.className = result;
            }
            return cl;
          });

        console.log(this.getParentComponent().students);
        this.students = this.passedStudents.filter(st => st.className==this.class.className);
        console.log(this.students);
      }
    });
    this.getParentComponent().classes;
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