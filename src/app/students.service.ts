import { Injectable } from '@angular/core';

export interface student {
  firstName: string,
  lastName: string,
  address: string,
  gpa: number,
  className: string,
}

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  public students: student[] = [
    {
      firstName: "Lorem",
      lastName: "Phasellus",
      address: "Morbi id justo dictum",
      gpa: 25,
      className: "Class 1"
    },
    {
      firstName: "Vivamus",
      lastName: "Quisque",
      address: "Sed hendrerit enim",
      gpa: 30,
      className: "Class 1"
    },
    {
      firstName: "Fusce",
      lastName: "Curabitur",
      address: "Vestibulum molestie lacus ac",
      gpa: 21,
      className: "Class 1"
    },
    {
      firstName: "Praesent",
      lastName: "Aenean",
      address: "Ut iaculis ipsum sit amet nisl",
      gpa: 17,
      className: "Class 2"
    },
    {
      firstName: "Lorem",
      lastName: "Phasellus",
      address: "Morbi id justo ddictum",
      gpa: 25,
      className: "Class 1"
    },
    {
      firstName: "Vivamus",
      lastName: "Quisque",
      address: "Sed hendrerit enim",
      gpa: 30,
      className: "Class 0"
    },
    {
      firstName: "Fusce",
      lastName: "Curabitur",
      address: "Vestibulum molestie lacus ac",
      gpa: 21,
      className: "Class 1"
    },
    {
      firstName: "Praesent",
      lastName: "Aenean",
      address: "Ut iaculis ipsum sit amet nisl",
      gpa: 17,
      className: "Class 2"
    },
    {
      firstName: "Lorem",
      lastName: "Phasellus",
      address: "Morbi id justo dictum",
      gpa: 25,
      className: "Class 3"
    },
    {
      firstName: "Vivamus",
      lastName: "Quisque",
      address: "Sed hendrerit enim",
      gpa: 30,
      className: "Class 1"
    },
    {
      firstName: "Fusce",
      lastName: "Curabitur",
      address: "Vestibulum molestie lacus ac",
      gpa: 21,
      className: "Class 0"
    },
    {
      firstName: "Praesent",
      lastName: "Aenean",
      address: "Ut iaculis ipsum sit amet nisl",
      gpa: 17,
      className: "Class 1"
    },
    {
      firstName: "Lorem",
      lastName: "Phasellus",
      address: "Morbi id justo dictum",
      gpa: 25,
      className: "Class 2"
    },
    {
      firstName: "Vivamus",
      lastName: "Quisque",
      address: "Sed hendrerit enim",
      gpa: 30,
      className: "Class 2"
    },
    {
      firstName: "Fusce",
      lastName: "Curabitur",
      address: "Vestibulum molestie lacus ac",
      gpa: 21,
      className: "Class 2"
    },
    {
      firstName: "Praesent",
      lastName: "Aenean",
      address: "Ut iaculis ipsum sit amet nisl",
      gpa: 17,
      className: "Class 0"
    },

  ];

  constructor() { }

  getStudents(){
    return this.students;
  }
  setStudents(newStudents: student[]){
    this.students=newStudents;
  }

  compareStudents(st1: student, st2: student){
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

  pushStudent(st: student){
    this.students.push(st);
  }
}
