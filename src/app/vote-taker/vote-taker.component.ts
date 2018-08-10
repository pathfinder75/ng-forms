import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `<h2>Should mankind colonize the universe?</h2>
  <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
  <my-voter *ngFor="let voter of voters" [name]="voter" (onVoted)="onVoted($event)"></my-voter>`,
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  names = ['Mr Who', 'Ms. Universe', 'Mr. Bombastos'];
  constructor() { }
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
  ngOnInit() {
  }

}
