import { Component, ViewContainerRef} from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { ClassListComponent } from '../class-list/class-list.component';
import { StudentsService } from '../students.service';

export interface inputStudents {
  firstName: string,
  lastName: string,
  address: string,
  gpa: number,
  className: string,
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent{
  theRecord: inputStudents = null;
  student: inputStudents;
  newStudent: inputStudents = {
    firstName: "",
    lastName: "",
    address: "",
    gpa: 0,
    className: ""
  };

  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    gpa: new FormControl(''),
    className: new FormControl(''),
  });

  constructor(public route: ActivatedRoute, public router: Router, private viewContainerRef: ViewContainerRef, private studentService: StudentsService) { }

  getParentComponent(): ClassListComponent {
    return this.viewContainerRef[ '_data' ]
    .componentView.component.viewContainerRef[ '_view' ]
      .component
  }

  private students = this.studentService.getStudents();

  onSubmit(){
    this.setNewStudentValues();
    if(window.history.state.st){
      if(!this.studentService.compareStudents(this.student,this.newStudent)){
      this.students = this.students.map(st => {
        if(this.studentService.compareStudents(st,this.student)){
          st=Object.assign(this.newStudent);
        }
        return st;
      })
      }
    }else{
      this.studentService.pushStudent(this.newStudent);
    }
    this.studentService.setStudents(this.students);
  }

  setFormValues(){
    this.studentForm.patchValue({
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      address: this.student.address,
      gpa: this.student.gpa,
      className: this.student.className,
    })
  }

  setNewStudentValues(){
    this.newStudent.firstName=this.studentForm.get('firstName').value;
    this.newStudent.lastName=this.studentForm.get('lastName').value;
    this.newStudent.address=this.studentForm.get('address').value;
    this.newStudent.gpa=this.studentForm.get('gpa').value;
    this.newStudent.className=this.studentForm.get('className').value;
  }


  ngOnInit(){
    if(window.history.state.st){
      this.route.paramMap
        .pipe(map(() => {
          this.student = JSON.parse(window.history.state.st) as inputStudents;
        }))
        .subscribe();
        this.setFormValues();
      }else{
        this.studentForm.patchValue({
          className: JSON.parse(window.history.state.className)
        });
        this.studentForm.get('className').disable();
      }
  }
}
  

