import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {StudentsService} from '../../students.service';
import {Student} from '../../common/models/student';
import {zip} from "rxjs";
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit, OnDestroy {
  private _student: Student;
  private _isReady: boolean = false;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public route: ActivatedRoute,
              public router: Router,
              private studentsService: StudentsService) {
  }

  ngOnInit() {

    zip(this.route.queryParams, this.studentsService.studentObservable)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (data[0]['isEdit'] === 'true') {
          this._student = data[1];
        } else {
          this._student = new Student();
        }
        this._isReady = true;
      });

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public onSubmit() {
    this.studentsService.newStudentSubject.next(this._student);
  }

  get student(): Student {
    return this._student;
  }

  set student(value: Student) {
    this._student = value;
  }

  get isReady(): boolean {
    return this._isReady;
  }

  set isReady(value: boolean) {
    this._isReady = value;
  }
}
  

