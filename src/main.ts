import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig } from 'angularfire2';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyBfy_n3jEpwJPa1D5dK2ZhOiN4aCKECHn8",
    authDomain: "testusers-51083.firebaseapp.com",
    databaseURL: "https://testusers-51083.firebaseio.com",
    storageBucket: "testusers-51083.appspot.com"
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
  })
]);

