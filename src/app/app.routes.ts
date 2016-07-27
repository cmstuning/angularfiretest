import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HomeComponent } from './home.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
      path: '',
  component: HomeComponent
  },
  {
  path: 'hero/detailes/:id',
  component: HeroDetailComponent
},
];

export const appRouterProviders = [
  provideRouter(routes)
];
