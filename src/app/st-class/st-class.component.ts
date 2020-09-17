import { Component, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface inputClass {
  className: String,
  subjects: String,
  department: String,
}
export interface inputStudents {
  "First Name": String,
  "Last Name": String,
  "Address": String,
  "GPA": number,
  className: String,
}

@Component({
  selector: 'app-st-class',
  templateUrl: './st-class.component.html',
  styleUrls: ['./st-class.component.scss']
})
export class StClassComponent{
  @Input() passedClass: inputClass;
  @Input() passedStudents: inputStudents[];

  toggle = false;
  headers = ["First Name", "Last Name", "GPA", ];
  students: inputStudents[];
  class: inputClass;

  ngOnInit(){
    this.class = this.passedClass;
    this.students = this.passedStudents.filter(st => st.className==this.class.className);
  }

  

  //this.passedStudents = this.passedStudents.filter(t=>t.className === this.passedClass.className)[0];

  toggleStudents() {
    this.toggle = !this.toggle;
  }
}
