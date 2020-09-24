import { Component, NgModule } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DialogComponentComponent } from './dialog-component/dialog-component.component'

export interface inputClass {
  className: String,
  subjects: String,
  department: String,
}

@NgModule({
  imports: [
    MatDialog,

  ],
  declarations: [
    AppComponent,
    DialogComponentComponent,
  ],
  entryComponents: [
    DialogComponentComponent,
  ],
  
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'University';

  constructor() {}
}
