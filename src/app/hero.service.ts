import { Injectable } from '@angular/core';
import { Hero } from './hero'

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class HeroService {
//modifiedHero;
  heroes: FirebaseListObservable<any[]>;
  hero: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
  this.heroes = af.database.list('/heroes');
  //this.hero = af.database.list('/heroes');
//  this.heroes = af.database.list('');
  }
  
addHero(newHero: Hero) {
    this.heroes.push({ name: newHero.name });
  }
  deleteHero(key: string) {    
    this.heroes.remove(key); 
  }
  updateHero(key: string, updatedHero) {
    let modifiedHero = Object.assign({}, updatedHero);
    delete modifiedHero.$key;
    this.heroes.update(key,  modifiedHero );
  }
getHero(id: number) {
  //return this.getHeroes()
  //           .then(heroes => heroes.find(hero => hero.id === id));
}
 // constructor() {}

}
