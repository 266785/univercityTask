import {Student} from "./student";

export class UniversityClass {

  constructor(
    private _className: string,
    private _subjects: string,
    private _department: string,
    private _students: Student[]
  ) {}

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
  }

  get subjects(): string {
    return this._subjects;
  }

  set subjects(value: string) {
    this._subjects = value;
  }

  get department(): string {
    return this._department;
  }

  set department(value: string) {
    this._department = value;
  }

  get students(): Student[] {
    return this._students;
  }

  set students(value: Student[]) {
    this._students = value;
  }
}
