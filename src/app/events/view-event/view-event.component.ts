import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  private event: any;
  isLoading = false;
  isAttending = false;

  constructor(private activatedRoute: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let eventId: number = params['id'];
      this.loadEvent(eventId);
    });
  }

  private loadEvent(eventId: number) {
    console.log(this.eventService.events);
    this.event = this.findEvent(eventId);

    if (!this.event) {
      console.log('Couldn\'t find event with id ' + eventId + '. Loading events from backend..');
      this.loadEventsAndFindEventWithId(eventId);
    } else {
      console.log(this.event);
    }
  }

  private loadEventsAndFindEventWithId(eventId) {
    this.eventService.observeEvents()
      .subscribe(
        () => {
          this.event = this.findEvent(eventId);
        }
      )
  }

  private findEvent(id: number): any {
    return this.eventService.findEventWithId(id);
  }

  attend() {
    this.isAttending = true;
    // TODO: Set user as attending event.
  }

}
