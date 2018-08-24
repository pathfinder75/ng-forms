import { Component, OnInit } from '@angular/core';
import { VoterService } from 'app/services/voter.service';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {
  agree = 0;
  disagree = 0;
  public voters;
  public getVoters(): any {
    this.voterService.getVoters().then(value => this.voters = value);
  }
  constructor(private voterService: VoterService) { }
  onVoted(agreed: boolean) {
    agreed ? this.agree++ : this.disagree++;
  }
  ngOnInit() {
    this.getVoters();
  }

}
