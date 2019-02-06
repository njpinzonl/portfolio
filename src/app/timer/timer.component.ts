import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  minutes = 0;
  seconds = 0;
  intervalCont: any;
  @Input() startCount: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.startCount.subscribe((dataEv) => {
      if (dataEv) {
        this.seconds = 0;
        this.minutes = 0;
        clearInterval(this.intervalCont);
        this.intervalCont = setInterval(() => {
          this.seconds++;
          if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes >= 60) {
              this.minutes = 0;
              clearInterval(this.intervalCont);
            }
          }
        }, 1000);
      } else {
        const time = this.minutes.toString().length > 1 ? this.minutes.toString() + this.seconds.toString() :
                         '0' + this.minutes.toString() + this.seconds.toString();
        this.orderScores(time);
        clearInterval(this.intervalCont);
      }
    });
  }

  orderScores(time: string) {
    const values = sessionStorage.getItem('Score');
    const objectTime = values ? values.split(',') : [];
    objectTime.push(time);
    objectTime.sort(function(a, b) {return parseInt(a, 10) -  parseInt(b, 10); });
    sessionStorage.setItem('Score', objectTime.toString());
  }
}
