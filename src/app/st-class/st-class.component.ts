import { Component, Input,ViewContainerRef, NgModule } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component'
import { StudentComponent } from '../student/student.component';
import {Router} from "@angular/router";

export interface inputClass {
  className: string,
  subjects: string,
  department: string,
}
export interface inputStudents {
  "First Name": string,
  "Last Name": string,
  "Address": string,
  "GPA": number,
  className: string,
}

@NgModule({
  imports: [
    MatDialog,
  ],

  declarations: [
    AppComponent,
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

export class StClassComponent {
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
  ];

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

  constructor(private viewContainerRef: ViewContainerRef,
              public dialog: MatDialog,
              public warnDialog: MatDialog,
              private router: Router) {
  }

  @Input() passedClass: inputClass;
  @Input() passedStudents: inputStudents[];

  toggle = false;
  headers = ["First Name", "Last Name", "GPA", ];
  filteredStudents: inputStudents[];
  class: inputClass;

  ngOnInit(){
    this.class = this.passedClass;
    this.filteredStudents = this.passedStudents.filter(st => st.className==this.class.className);
  }

  deleteClass(){
    if(!this.students.some(st => st.className == this.passedClass.className))
      {
        this.classes = this.classes.filter(cl => cl.className.localeCompare(this.passedClass.className))
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
      this.students = this.students.map(st => {
        console.log(`inside students ${st.className} : ${this.passedClass.className}`)
        if(!st.className.localeCompare(this.passedClass.className)){
          console.log("changing")
          st.className = result;
        }
        return st;
      })

      if(result.localeCompare(this.passedClass.className)){
        this.classes = this.classes.map(cl => {
            if(!cl.className.localeCompare(this.passedClass.className)){
            cl.className = result;
            }
            return cl;
          });

        console.log(this.students);
        this.filteredStudents = this.passedStudents.filter(st => st.className==this.class.className);
        console.log(this.filteredStudents);
      }
    });
    this.classes;
  }

  getParentComponent(): AppComponent {
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
