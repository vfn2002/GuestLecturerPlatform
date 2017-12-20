import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css']
})
export class NotificationItemComponent implements OnInit {

  @Output() declineEmitter = new EventEmitter<any>();
  @Output() acceptEmitter = new EventEmitter<any>();
  @Input() notification;
  isAnswered = false;
  isAccepted;

  constructor() { }

  ngOnInit() {
  }

  notificationTitle(): string {
    if (this.notification.type === 'invite') {
      return 'Invitation to event'
    }
  }

  accept() {
    this.acceptEmitter.emit(this.notification);
    this.isAnswered = true;
    this.isAccepted = true;
  }

  decline() {
    this.declineEmitter.emit(this.notification);
    this.isAnswered = true;
    this.isAccepted = false;
  }

}
