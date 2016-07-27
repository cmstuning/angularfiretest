/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { HeroService } from './hero.service';

describe('Hero Service', () => {
  beforeEachProviders(() => [HeroService]);

  it('should ...',
      inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
