import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';



@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
 // templateUrl: 'hero-detail.component.html',
 template: `
  <div >
  {{selectedHero  | async | json}}
  </div>
  <input type="text" #newname placeholder="Name" />
  <input type="text" #newsize placeholder="Size" />
  <br />
  <button (click)="save(newname.value)">Set Name</button>
  <button (click)="update(newsize.value)">Update Size</button>
  <button (click)="delete()">Delete</button>
  `,
  
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  //@Input()
  selectedHero: FirebaseObjectObservable<any[]>;
 // selectedHero: Hero; // note, that I changed name
  sub:any;

  constructor(
 //   private heroService: HeroService,
  private route: ActivatedRoute,
  af: AngularFire
  ){
    this.route.params.subscribe(params => {
      let id = params['id'];
     // this.selectedHero = af.database.list('/heroes/-KNWNw61A0Ij1HuX_ut4');
       console.log(id);
    });
    this.selectedHero = af.database.object('/heroes/-KNaXgtfq-UizUn9n8xZ');
    
  /*   this.selectedHero = af.database.list('/heroes', {
  query: {
key: id
  }
}); */
  }
ngOnInit() { 
  console.log(this.selectedHero);
  /*  this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.selectedHero = hero); 
    }); */
  }
  ngOnDestroy() {
 // this.sub.unsubscribe();
}

}
