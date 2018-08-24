import { Injectable } from '@angular/core';
import { Hero } from "../hero/hero-child/hero";
import { HEROES } from "../mocks/mock-h";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  // getHeroes(): Promise<Hero[]> {
  //   return new Promise(function(resolve, reject) {
  //     resolve(HEROES);
  //   });
  // }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  constructor() { }
}
