import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-guest-lecturer-item',
  templateUrl: './guest-lecturer-item.component.html',
  styleUrls: ['./guest-lecturer-item.component.css']
})
export class GuestLecturerItemComponent implements OnInit {

  @Input() professional;
  @Output() invitationEmitter = new EventEmitter();
  isInvited = false;

  constructor() { }

  ngOnInit() {
  }

  invite() {
    this.isInvited = true;
    this.invitationEmitter.emit(this.professional);
  }

}
