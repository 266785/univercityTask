import {Component, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {UniversityClassDialogComponent} from '../dialog-component/university-class-dialog.component'
import {Student} from '../../common/models/student';
import {UniversityClass} from '../../common/models/university-class.model';
import {AppConstants} from "../../utilities/constants";

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})

export class ClassListComponent implements OnInit {

  private _students: Student[] = [];
  private _classes: UniversityClass[] = [];
  private _className: string;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._classes = AppConstants.CLASSES_MOCK_DATA;
  }

  public addClass() {
    const dialogRef = this.dialog.open(UniversityClassDialogComponent, {
      width: '250px',
      data: {className: this._className}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!this._classes.some(cl => cl.className === result)) {
        this._classes.push(new UniversityClass(result, "??", "??", []));
      }
    });
  }

  get students(): Student[] {
    return this._students;
  }

  get classes(): UniversityClass[] {
    return this._classes;
  }

  set students(value: Student[]) {
    this._students = value;
  }

  set classes(value: UniversityClass[]) {
    this._classes = value;
  }

  set className(value: string) {
    this._className = value;
  }

  get className(): string {
    return this._className;
  }

}
