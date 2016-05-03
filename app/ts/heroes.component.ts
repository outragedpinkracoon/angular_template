import {Component} from 'angular2/core';
import {Hero} from './heroes/models/hero';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { HeroService } from './heroes/services/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/views/heroes.component.html',
    styleUrls:  ['app/css/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(
    private _heroService: HeroService) { }
    
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}


