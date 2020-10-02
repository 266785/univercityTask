import { Component, ViewContainerRef} from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { ClassListComponent } from '../class-list/class-list.component';
import { StudentsService } from '../students.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent{
  theRecord: Student = null;
  student: Student;
  newStudent = new Student("default","default","default",1,"default");

  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    gpa: new FormControl(''),
    className: new FormControl(''),
  });

  constructor(public route: ActivatedRoute, public router: Router, private viewContainerRef: ViewContainerRef, private studentService: StudentsService) { }

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
      firstName: this.student.getFirstName(),
      lastName: this.student.getLastName(),
      address: this.student.getAddress(),
      gpa: this.student.getGpa(),
      className: this.student.getClassName(),
    })
  }

  setNewStudentValues(){
    this.newStudent.setFirstName(this.studentForm.get('firstName').value);
    this.newStudent.setLastName(this.studentForm.get('lastName').value);
    this.newStudent.setAddress(this.studentForm.get('address').value);
    this.newStudent.setGpa(this.studentForm.get('gpa').value);
    this.newStudent.setClassName(this.studentForm.get('className').value);
  }


  ngOnInit(){
    if(window.history.state.st){
      this.route.paramMap
        .pipe(map(() => {
          this.student = JSON.parse(window.history.state.st) as Student;
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
  

