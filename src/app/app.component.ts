import { Component, NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';
import { ClassListComponent } from './component/class-list/class-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  title = 'University';

  goHome(){
    this.router.navigateByUrl('/');
  }

}
