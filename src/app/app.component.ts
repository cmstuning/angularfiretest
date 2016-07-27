import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService } from './hero.service';
import { AngularFire } from 'angularfire2';



@Component({
 moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ]
})



export class AppComponent {
  title = 'My Tour of Heroes';

  constructor(public af: AngularFire) {}

 login() {
    this.af.auth.login();
  }
  logout() {
    this.af.auth.logout();
  }

}
