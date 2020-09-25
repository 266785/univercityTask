import { Component, ViewContainerRef} from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { ClassListComponent } from '../class-list/class-list.component';

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
  newStudent: inputStudents;

  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    gpa: new FormControl(''),
    className: new FormControl(''),
  });

  constructor(public route: ActivatedRoute, public router: Router, private viewContainerRef: ViewContainerRef) { }

  getParentComponent(): ClassListComponent {
    // return this.viewContainerRef[ '_data' ]
    // .componentView.component.viewContainerRef[ '_view' ]
    //   .component
    return this.viewContainerRef[ '_data' ]
    .componentView.component.viewContainerRef[ '_view' ]
      .component
  }

  onSubmit(){
      this.setNewStudentValues();
      console.log(this);
      console.log(this.getParentComponent().students);

      // if(!this.compareStudents(this.student,this.newStudent)){
      // this.getParentComponent().students.map(st => {
      //   if(this.compareStudents(st,this.student)){
      //     st=this.newStudent;
      //   }
      //   return st;
      // })
    //}
  }

  compareStudents(st1: inputStudents, st2: inputStudents){
    if(st1.firstName==st2.firstName &&
      st1.lastName==st2.lastName &&
      st1.address==st2.address &&
      st1.gpa==st2.gpa &&
      st1.className==st2.className){
        return true;
      }else{
        return false;
      }
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
    this.route.paramMap
      .pipe(map(() => {
        this.student = JSON.parse(window.history.state.st) as inputStudents;
        this.newStudent = JSON.parse(window.history.state.st) as inputStudents;
      }))
      .subscribe();
     
      this.setFormValues();
  }
}
  

