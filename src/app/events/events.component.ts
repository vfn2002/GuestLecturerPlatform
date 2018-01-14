import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events;
  isLoading = true;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loadEvents();
  }

  private loadEvents() {
    if (this.eventService.events) {
      this.events = this.eventService.events;
      this.isLoading = false;
    }
    this.observeEvents();
  }

  private observeEvents() {
    this.eventService.observeEvents().subscribe(
      events => {
        this.events = events;
        this.isLoading = false;
      }
    );
  }

  filterWithTags(tags) {
    console.log(tags);
  }
}
