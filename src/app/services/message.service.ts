import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class MessageService {
  public messages: string[] = [];

  createObservable():Observable<String[]> {
    return Observable.create((observer) => {
      this.messages.forEach((item) => observer.next(item))
    });
  }
  subscribeMessage(){
    const msg = this.createObservable();
    msg.subscribe(
      (data: String[]) => console.log(data)
    )
  }
  displayMessages(msg){
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  constructor() { }
}
