import {Component, NgModule, Inject} from '@angular/core';

import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormControl} from '@angular/forms';
import {UniversityClass} from '../../common/models/university-class.model';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './university-class-dialog.component.html',
  styleUrls: ['./university-class-dialog.component.scss']
})

export class UniversityClassDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UniversityClassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  /*onSubmit() {
    this.dialogRef.close(this.data.className);
  }*/

}
