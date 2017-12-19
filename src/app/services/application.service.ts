import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {LoginService} from "./login.service";
import {Observable} from "rxjs";
import {EventService} from "./event.service";

@Injectable()
export class ApplicationService {

  constructor(
    private user: UserService,
    private loginService: LoginService,
    private event: EventService
  ) { }

  submitStudent(student: any) {
    return this.user.postStudent(student);
  }

  submitLecturer(lecturer: any) {
    return this.user.postLecturer(lecturer);
  }

  submitProfessional(professional: any) {
    return this.user.postProfessional(professional);
  }

  submitEvent(event: any) {
    return this.event.postEvent(event);
  }

  login(credentials: any) {
    return this.loginService.login(credentials);
  }

  setUserLoginStatus(bool: boolean) {
    this.loginService.setLoggedIn(bool);
  }

  observeLoginStatus(): Observable<boolean> {
    return this.loginService.observeLoginStatus();
  }

  getCurrentLoginStatus() {
    //return this.loginService
  }

  getEvents() {
    return this.event.events;
  }

  getProfessionals() {
    return this.user.professionals;
  }

  addEvent(event) {
    this.event.events.push(event);
  }

}
