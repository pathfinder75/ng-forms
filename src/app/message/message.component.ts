import { Component, OnInit } from '@angular/core';
import { MessageService } from 'app/services/message.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-message',
  // templateUrl: './message.component.html',
  template: `<div id="message" *ngFor="let message of messages">{{message}}</div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  public source: Observable<number>;
  public messages: String[];
  get Messages(){
    return this.messageService.messages;
  }

  ngOnInit() {
    this.messageService.add('Are you alive ?');
    this.messageService.subscribeMessage();
    // fetch messages from messageService
    this.source = Observable.create((observer) => {
      observer.next(1)
      observer.next(2)
      observer.next(3)
      observer.complete()
    });

    

    if(this.messageService.messages.length){
      const element = document.getElementById('message');
      const source = Observable.create((observer) => {
        // this.messages.forEach((item) => observer.next(item));
      })
      source.subscribe((v) => console.log(v));


    }
  }

}
