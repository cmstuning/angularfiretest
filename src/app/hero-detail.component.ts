import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero';
import {  Router, ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';



@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
 /*template: `
  <div >
  {{selectedHero?.name}}
  </div>
  `,*/
  
})
export class HeroDetailComponent implements OnInit, OnDestroy {

sub:any;
selectedHero:Hero = {name: "", $key: ""}

  constructor(private _route: ActivatedRoute, private _heroService: HeroService, private _router: Router){
  }
ngOnInit() { 
  this.sub = this._route.params.subscribe(params => {
      let id = params['id'];
     
      this._heroService.getHero(id).subscribe(
        selectedHero => this.selectedHero = selectedHero
      );
      
    });

  }
  ngOnDestroy() {
 this.sub.unsubscribe();
}

updateHero(selectedHero) {
  this._heroService.updateHero(selectedHero.$key, selectedHero);
  this._router.navigate(['/heroes']);
   
  }
  deleteHero(key: string) {    
    this._heroService.deleteHero(key); 
    this._router.navigate(['/heroes']);
  }
}
