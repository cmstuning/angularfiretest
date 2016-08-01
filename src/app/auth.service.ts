import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  uuu;

  constructor(public af: AngularFire) {
     
  }
login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
  getUser() {
   return   this.af.auth;
  }
}
