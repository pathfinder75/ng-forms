import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  // templateUrl: './countdown-timer.component.html',
  template: '<p>{{message}}</p>',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalID = 0;
  message = '';
  seconds = 11;
  clearTimer() {clearInterval(this.intervalID);};

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {}
  start() { this.countDown();}
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private countDown() {
    this.clearTimer()
    this.intervalID = window.setInterval(() => {
      this.seconds -= 1;
      if(this.seconds === 0){
        this.message = "Blast off!";
      } else {
        if (this.seconds < 0) { this.seconds = 10; } //reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    },1000);
  }

}
