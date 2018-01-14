import { Component, OnInit } from '@angular/core';
import {FindGuestLecturersComponent} from "../../find-guest-lecturers/find-guest-lecturers.component";
import {MatDialog} from "@angular/material";
import {ActivatedRoute, Params} from "@angular/router";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  private event: any;
  isLoading = false;

  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let eventId: number = params['id'];
      this.loadEvent(eventId);
    });
  }

  openFindSpeakerDialogue() {
    const dialogRef = this.dialog.open(FindGuestLecturersComponent);
    dialogRef.componentInstance.event_id = this.event.id;
    dialogRef.updateSize('auto', '90vh');
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

}
