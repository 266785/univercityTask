import { Component,  NgModule, Inject } from '@angular/core';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  FormGroup, FormControl } from '@angular/forms';



export interface InputClass {
  className: String,
  subjects: String,
  department: String,
}

@NgModule({
  imports: [
    MatDialogModule,
    MatDialogRef
  ]
})

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent{
  constructor(
    public dialogRef: MatDialogRef<DialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InputClass) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  classManager = new FormGroup({
    className: new FormControl(''),
  });

  onSubmit() {
    
    return(this.classManager.value);

  }

}
