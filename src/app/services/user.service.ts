import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {ApiService} from "./api.service";

@Injectable()
export class UserService {

  user = {
    id: undefined
  };

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


}
