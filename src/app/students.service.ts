import { Injectable} from '@angular/core';
import { Student } from './models/student.model';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  st = new Student("","","",1,"")

  public students: Student[] = [
    new Student("Lorem","Phasellus","Morbi id justo dictum",25,"Class 1"),
    new Student("Lorem","Phasellus","Morbi id justo dictum",25,"Class 1"),
    new Student("Vivamus","Quisque","Sed hendrerit enim",30,"Class 1"),
    new Student("Fusce","Curabitur","Vestibulum molestie lacus ac",21,"Class 1"),
    new Student("Praesent","Aenean","Ut iaculis ipsum sit amet nisl",17,"Class 2"),
    new Student("Lorem","Phasellus","Morbi id justo ddictum",25,"Class 1"),
    new Student("Vivamus","Quisque","Sed hendrerit enim",30,"Class 0"),
    new Student("Fusce","Curabitur","Vestibulum molestie lacus ac",21,"Class 1"),
    new Student("Praesent","Aenean","Ut iaculis ipsum sit amet nisl",17,"Class 2"),
    new Student("Lorem","Phasellus","Morbi id justo dictum",25,"Class 3"),
    new Student("Vivamus","Quisque","Sed hendrerit enim",30,"Class 1"),
    new Student("Fusce","Curabitur","Vestibulum molestie lacus ac",21,"Class 0"),
    new Student("Praesent","Aenean","Ut iaculis ipsum sit amet nisl",17,"Class 1"),
    new Student("Lorem","Phasellus","Morbi id justo dictum",25,"Class 2"),
    new Student("Vivamus","Quisque","Sed hendrerit enim",30,"Class 2"),
    new Student("Fusce","Curabitur","Vestibulum molestie lacus ac",21,"Class 2"),
    new Student("Praesent","Aenean","Ut iaculis ipsum sit amet nisl",17,"Class 0"),
  ];

  constructor() { }

  getStudents(){
    return this.students;
  }
  setStudents(newStudents: Student[]){
    this.students=newStudents;
  }

  compareStudents(st1: Student, st2: Student){
    if(st1.getFirstName()==st2.getFirstName() &&
      st1.getLastName()==st2.getLastName() &&
      st1.getAddress()==st2.getAddress() &&
      st1.getGpa()==st2.getGpa() &&
      st1.getClassName()==st2.getClassName()){
        return true;
      }else{
        return false;
      }
  }

  pushStudent(st: Student){
    this.students.push(st);
  }
}
