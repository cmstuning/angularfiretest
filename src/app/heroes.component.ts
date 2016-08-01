import { Component, OnInit } from '@angular/core';
//import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';

@Component({
 moduleId: module.id,
  selector: 'app-heroes',
  /*template: `
  <ul><li *ngFor="let item of heroes | async">{{item.name}}</li></ul>
  `, */
 templateUrl: 'heroes.component.html',
 // providers: [HeroService]
 // directives: [HeroDetailComponent],
  
})



export class HeroesComponent implements OnInit {

title = "My Heroes";
hero:Hero;
 heroes;
 selectedHero;

 constructor(private _router: Router, private _heroService: HeroService) {

  } 
   
addHero(newHero: Hero) {
    this._heroService.addHero(newHero);
  }

  updateHero(selectedHero) {
   this._heroService.updateHero(selectedHero.$key, selectedHero);
   
  }
  deleteHero(key: string) {    
    this._heroService.deleteHero(key); 
  }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
    
  }

 onSelect(hero) { 
     this._router.navigate(['/hero/detailes', hero.$key]);
    
  } 
}
