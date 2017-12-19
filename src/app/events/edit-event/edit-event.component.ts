import { Component, OnInit } from '@angular/core';
import {FindGuestLecturersComponent} from "../../find-guest-lecturers/find-guest-lecturers.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginDialogue() {
    this.dialog.open(FindGuestLecturersComponent, {
      data: { id: 7 },
    });
  }

}
