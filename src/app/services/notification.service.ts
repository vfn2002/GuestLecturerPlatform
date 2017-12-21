import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";
import {BookingService} from "./booking.service";
import {UserService} from "./user.service";

@Injectable()
export class NotificationService {

  private notificationSubject = new Subject();
  notificationsObservable = this.notificationSubject.asObservable();
  private _notifications = [
  ];

  constructor(private booking: BookingService,
              private userService: UserService) {
    this.loadNotifications();
  }

  observeNotifications(): Observable<any> {
    return this.notificationsObservable;
  }

  publishNotifications() {
    this.notificationSubject.next(this._notifications);
  }

  setNotifications(notifications) {
    this._notifications = notifications;
    this.publishNotifications();
  }

  get notifications() {
    return this._notifications;
  }

  private loadNotifications() {
    this.loadBookings();
  }

  private loadBookings() {
    this.booking.getBookings(this.userService.user.id)
      .subscribe(
        res => {
          console.log('bookings', res);
        }
      );
  }
}
