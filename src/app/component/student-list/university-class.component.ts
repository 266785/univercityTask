import {Component, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {UniversityClassDialogComponent} from '../dialog-component/university-class-dialog.component'
import {ClassListComponent} from '../class-list/class-list.component';
import {StudentsService} from '../../students.service';
import {Student} from '../../common/models/student';
import {UniversityClass} from '../../common/models/university-class.model';
import {Router} from '@angular/router';
import {take, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'university-class',
  templateUrl: './university-class.component.html',
  styleUrls: ['./university-class.component.scss']
})

export class UniversityClassComponent implements OnInit, OnDestroy {

  @Input() passedClass: UniversityClass;

  private _toggle = false;
  private _headers = ["First Name", "Last Name", "GPA",];
  private _columnTags = ["firstName", "lastName", "gpa",];
  private _class: UniversityClass;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private viewContainerRef: ViewContainerRef,
              public dialog: MatDialog,
              private studentsService: StudentsService,
              private router: Router) {
  }

  ngOnInit() {
    this._class = this.passedClass;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  deleteClass() {
    if (!this.passedClass.students.length) {

      const index = this.getParentComponent().classes.indexOf(this.passedClass);
      this.getParentComponent().classes.splice(index, 1);

    } else {

      const dialogWarn = this.dialog.open(WarningDialog, {
        width: '250px',
        data: {className: this.passedClass.className}
      });

    }
  }

  editClass() {
    const dialogRef = this.dialog.open(UniversityClassDialogComponent, {
      width: '250px',
      data: {className: this.passedClass.className}
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.passedClass.className = result
      });
  }

  public addStudent() {
    this.router.navigate(['/student'], {
      queryParams: {
        isEdit: false
      }
    });
    this.studentsService.newStudentObservable
      .pipe(take(1))
      .subscribe((newStudent: Student) => {
        this.passedClass.students.push(newStudent);
      });
  }

  public deleteStudent(student: Student) {
    const index = this.passedClass.students.indexOf(student);
    this.passedClass.students.splice(index, 1);
  }

  public editStudent(student: Student, index: number) {
    this.studentsService.studentSubject.next(student);
    this.router.navigate(['/student'], {
      queryParams: {
        isEdit: true
      }
    });
    this.studentsService.newStudentObservable
      .pipe(take(1))
      .subscribe((newStudent: Student) => {
        this.passedClass.students[index] = newStudent;
      });
  }

  public getParentComponent(): ClassListComponent {
    return this.viewContainerRef['_data']
      .componentView.component.viewContainerRef['_view']
      .component;
  }

  public toggleStudents() {
    this._toggle = !this._toggle;
  }

  get toggle(): boolean {
    return this._toggle;
  }

  get headers(): string[] {
    return this._headers;
  }

  get columnTags(): string[] {
    return this._columnTags;
  }

  get class(): UniversityClass {
    return this._class;
  }
}

@Component({
  template: `
    <p>Cannot delete this class</p>
    <button mat-button mat-dialog-close>Okay</button>
  `,
})
export class WarningDialog {
}
