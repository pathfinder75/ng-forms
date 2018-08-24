import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countdown-parent',
  template: `
  <h3>Countdown to Lifoff (via local variable)</h3>
  <button (click)="timer.start()">start</button>
  <button (click)="timer.stop()">stop</button>
  <p class="seconds">{{ timer.seconds }}</p>
  <countdown-timer #timer></countdown-timer>
  `,
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
