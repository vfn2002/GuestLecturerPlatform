import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../services/notification.service";
import {BookingService} from "../services/booking.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications;
  isLoading = true;

  constructor(private notificationService: NotificationService,
              private bookingService: BookingService) { }

  ngOnInit() {
    if (this.notificationService.notifications) {
      this.notifications = this.notificationService.notifications;
      this.isLoading = false;
    }
    this.notificationService.observeNotifications().subscribe(
      notifications => {
        this.notifications = notifications;
        this.isLoading = false;
      }
    )
  }

  accept(notification) {
    this.bookingService.acceptBooking(notification.id)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }

  decline(notification) {
    this.bookingService.rejectBooking(notification.id)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }

}
