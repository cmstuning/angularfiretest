import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) {
     this.af.auth.subscribe(auth => console.log(auth));
  }
login() {
    this.af.auth.login();
  }
}
