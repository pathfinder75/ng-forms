import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-voter',
  templateUrl: './my-voter.component.html',
  styleUrls: ['./my-voter.component.css']
})
export class MyVoterComponent implements OnInit {
  private _name: string = "";
  @Input()
  set name (name: string) {
    this._name = '<no name set>';
  }
  get name () {
    return this._name;
  }
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
  constructor() { }

  ngOnInit() {
  }
  vote(agreed: boolean) {
    this.voted = true;
    agreed ? this.onVoted.emit(true) : this.onVoted.emit(false);
  }

}
