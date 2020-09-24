import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import {StClassComponent} from "./st-class/st-class.component";
import {ClassListComponent} from './class-list/class-list.component';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'student' , component: StudentComponent},
  {path: 'classes' , component: ClassListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
