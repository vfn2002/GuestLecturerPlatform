import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class EventService {

  private eventsSubject = new Subject();
  eventsObservable = this.eventsSubject.asObservable();
  private _events;

  constructor(private api: ApiService) {
    this.loadEventsFromAPI();
  }

  postEvent(event: any) {
    return this.api.post('/v1/lecturers/events', event)
      .map(
        res => {
          event = res.json();
          this.addEvent(event);
          return res;
        }
      );
  }

  findEventWithId(id: number): any {
    if(this._events) {
      for (let event of this._events) {
        if (event.id === +id) {
          return event;
        }
      }
    }
    return undefined;
  }

  observeEvents(): Observable<any> {
    return this.eventsObservable;
  }

  addEvent(event) {
    if (!this._events) {
      this._events = [];
    }
    this._events.push(event);
    this.publishEvents();
  }

  publishEvents() {
    this.eventsSubject.next(this._events);
  }

  loadEventsFromAPI() {
    this.api.get('v1/events').subscribe(
      res => {
        const events = res.json();
        this.setEvents(events);
      }
    )
  }

  setEvents(events) {
    this._events = events;
    this.publishEvents();
  }

  get events() {
    return this._events;
  }

}
