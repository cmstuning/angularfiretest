import { Injectable } from '@angular/core';
import { Hero } from './hero'

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class HeroService {
  afPath:string = '/heroes/';
//modifiedHero;
  heroes: FirebaseListObservable<any[]>;
  selectedHero: FirebaseObjectObservable<any[]>;
  constructor(private af: AngularFire) {
      
  this.heroes = af.database.list(this.afPath);

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
getHero(id: string) {
   return this.af.database.object(this.afPath+id);
 
}
getHeroes() {
return this.heroes;
}

}
