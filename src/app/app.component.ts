import { Component, NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';
import { ClassListComponent } from './class-list/class-list.component';

@NgModule({
  imports: [
    ClassListComponent,
  ],
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  title = 'Univercity';
  displayClasses = false;



  goHome(){
    this.displayClasses=false;
  }

  showClasses(){
    this.displayClasses= !this.displayClasses;
  }


}