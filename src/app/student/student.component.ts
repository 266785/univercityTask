import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';

export interface inputStudents {
  "First Name": string,
  "Last Name": string,
  "Address": string,
  "GPA": number,
  className: string,
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  theRecord: inputStudents = null;
  student: inputStudents;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {
    console.log("inside on init");
    this.router.events.subscribe(val => {
      //console.log(val.state.root.firstChild.params);


      });
  }
  // getStudent(){
  //   this.route.params.subscribe(params => {
  //     console.log("inside route subscribe")
  //     console.log(params['st'])
  //     this.student = JSON.parse(params.st) as inputStudents;
  //     console.log(this.student)
  //     });
  //   }
  //   a = this.getStudent();
  
}
