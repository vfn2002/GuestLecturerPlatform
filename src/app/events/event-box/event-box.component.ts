import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.css']
})
export class EventBoxComponent implements OnInit {

  @Input() event;

  constructor() { }

  ngOnInit() {
  }

  random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

}
