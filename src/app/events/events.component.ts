import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [
    {
      id: 1,
      name: 'event 1'
    },
    {
      id: 2,
      name: 'event 2'
    },
    {
      id: 3,
      name: 'event 3'
    },
    {
      id: 4,
      name: 'event 4'
    },
    {
      id: 5,
      name: 'event 4'
    },
    {
      id: 6,
      name: 'event 4'
    },
    {
      id: 7,
      name: 'event 4'
    },
    {
      id: 8,
      name: 'event 4'
    },
    {
      id: 9,
      name: 'event 4'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
