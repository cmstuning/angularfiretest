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

title = "My Heroes"
 heroes;
 selectedHero;
 isEditing:boolean = false;
 //heroes: Hero[];

 constructor(private _router: Router, private _heroService: HeroService) {

  } 
   
addHero(newHero: Hero) {
    this._heroService.addHero(newHero);
  }

  updateHero(selectedHero) {
   this._heroService.updateHero(selectedHero.$key, selectedHero);
   this.isEditing = false;
   
  }
  deleteHero(key: string) {    
    this._heroService.deleteHero(key); 
  }

//selectedHero: Hero;
hero:Hero;

/*constructor(
    private _router: Router,
    
    private _heroService: HeroService

) { } */

  ngOnInit() {
    
    //  this.heroes = af.database.list('/heroes');
   // this.getHeroes();
    this.heroes = this._heroService.heroes;
    
  }

 onSelect(hero) { 
   this.selectedHero = hero; 
   this.isEditing = true;
      //this.router.navigate(['hero/detail', this.selectedHero.id]);
     // this.hero = hero; 
   //  this._router.navigate(['/hero/detailes', hero.$key]);
   // let link = ['/hero/detail', hero.id];
 // this.router.navigate(link);
    
  } 
}
