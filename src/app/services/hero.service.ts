import { Injectable } from '@angular/core';
import { Patient } from "../patient/hero-child/patient";
import { HEROES } from "../mocks/mock-h";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from 'app/services/message.service';

@Injectable()
export class HeroService {
  // getHeroes(): Promise<Hero[]> {
  //   return new Promise(function(resolve, reject) {
  //     resolve(HEROES);
  //   });
  // }

  getHeroes(): Observable<Patient[]> {
    this.messageService.add('messageService: fetched patient');
    return of(HEROES);
  }
  constructor(private messageService: MessageService) { }
}
