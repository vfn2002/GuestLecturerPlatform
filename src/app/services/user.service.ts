import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Student} from "../model/student";
import {ApiService} from "./api.service";

@Injectable()
export class UserService {

  user: User;
  private _professionals = [
    {
      name: 'Victor Nielsen',
      company: 'Google'
    },
    {
      name: 'Victor Nielsen',
      company: 'Google'
    },
    {
      name: 'Victor Nielsen',
      company: 'Google'
    },
    {
      name: 'Victor Nielsen',
      company: 'Google'
    },
    {
      name: 'Victor Nielsen',
      company: 'Google'
    },
  ];

  constructor(private api: ApiService) { }

  postStudent(student: any) {
    return this.api.post('/students', student);
  }

  postLecturer(lecturer: any) {
    return this.api.post('/lecturers', lecturer);
  }

  postProfessional(professional: any) {
    return this.api.post('/professionals', professional);
  }

  get professionals() {
    return this._professionals;
  }

  set professionals(value) {
    this._professionals = value;
  }

}
