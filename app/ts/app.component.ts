import { Component } from 'angular2/core';
import { HeroService }     from './heroes/services/hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app.component.html',
  styleUrls: ['app/css/app.component.css'],
  directives: [HeroesComponent],
  providers: [
    HeroService
  ]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
