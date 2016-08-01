import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService } from './hero.service';
import { AngularFire } from 'angularfire2';
import { AuthService } from './auth.service';




@Component({
 moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService,
    AuthService
  ]
})



export class AppComponent implements OnInit{
  title = 'My Tour of Heroes';
  usr:Object = {displayName:"Anonymous"};

  constructor(public af: AngularFire, private _authService: AuthService) {}

 login() {
    this._authService.login();
  }
  logout() {
    this._authService.logout();
  }

  ngOnInit() {
  this._authService.getUser().subscribe(user=> this.usr = user);
  //this._authService.getUser().subscribe(user=> console.log(user));
  
  }

}
