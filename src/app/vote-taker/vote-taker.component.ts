import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {
  agree = 0;
  disagree = 0;
  voters = ['Mr Who', 'Ms. Universe', 'Mr. Bombastos'];
  constructor() { }
  onVoted(agreed: boolean) {
    agreed ? this.agree++ : this.disagree++;
  }
  ngOnInit() {
  }

}
