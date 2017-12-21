import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProfessionalsService {

  private professionalsSubject = new Subject();
  professionalsObservable = this.professionalsSubject.asObservable();
  private _professionals;

  constructor(private api: ApiService) {
    this.loadProfessionalsFromAPI();
  }

  observeProfessionals(): Observable<any> {
    return this.professionalsObservable;
  }

  addProfessional(event) {
    if (!this._professionals) {
      this._professionals = [];
    }
    this._professionals.push(event);
    this.publishProfessionals();
  }

  publishProfessionals() {
    this.professionalsSubject.next(this._professionals);
  }

  loadProfessionalsFromAPI() {
    this.api.get('v1/professionals').subscribe(
      res => {
        const professionals = res.json();
        this.setProfessionals(professionals);
      }
    )
  }

  setProfessionals(events) {
    this._professionals = events;
    this.publishProfessionals();
  }

  get professionals() {
    return this._professionals;
  }

}
