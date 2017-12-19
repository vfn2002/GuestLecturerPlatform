import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {ApplicationService} from "../services/application.service";

@Component({
  selector: 'app-find-guest-lecturers',
  templateUrl: './find-guest-lecturers.component.html',
  styleUrls: ['./find-guest-lecturers.component.css']
})
export class FindGuestLecturersComponent implements OnInit {

  isLoading = true;
  professionals;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private application: ApplicationService) {
    this.professionals = this.application.getProfessionals();
  }

  ngOnInit() {

  }

  invite(event: Event) {
    event.srcElement.setAttribute('disabled', 'true');
    event.srcElement.innerHTML = 'Request sent';
  }

}
