import {Injectable} from '@angular/core';
import {Student} from './common/models/student';
import {BehaviorSubject, Subject} from "rxjs";
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class StudentsService {

  private readonly _student$ = new BehaviorSubject<Student>(null);
  private readonly _newStudent$ = new Subject<Student>();

  constructor() { }

  get studentSubject(): Subject<Student> {
    return this._student$;
  }

  get studentObservable(): Observable<Student> {
    return this._student$.asObservable();
  }

  get newStudentSubject(): Subject<Student> {
    return this._newStudent$;
  }

  get newStudentObservable(): Observable<Student> {
    return this._newStudent$.asObservable();
  }

  compareStudents(st1: Student, st2: Student) {
    return st1.firstName == st2.firstName &&
      st1.lastName == st2.lastName &&
      st1.address == st2.address &&
      st1.gpa == st2.gpa &&
      st1.className == st2.className;
  }

}
