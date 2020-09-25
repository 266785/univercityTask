import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ClassListComponent } from './class-list/class-list.component';

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
