import { Component,  NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatDialogModule
  ]
})

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent{


}
