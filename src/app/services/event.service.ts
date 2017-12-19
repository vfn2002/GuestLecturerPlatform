import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable()
export class EventService {

  private _events = [];

  constructor(private api: ApiService) { }

  postEvent(event: any) {
    return this.api.post('/v1/lecturers/events', event);
  }

  get events() {
    return this._events;
  }

  set events(value) {
    this._events = value;
  }

}
