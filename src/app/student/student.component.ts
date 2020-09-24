import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
export class StudentComponent implements OnInit{
  theRecord: inputStudents = null;
  student: inputStudents;


  constructor(public route: ActivatedRoute, public router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(){
    
    this.route.paramMap
      .pipe(map(() => {
        this.student = JSON.parse(window.history.state.st) as inputStudents;
      }))
      .subscribe();
      
     console.log("inside on init")
     
      console.log(this.student)
  }
}
  

