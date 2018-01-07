import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class BookingService {

  constructor(private api: ApiService) { }

  bookProfessional(professional_id, event_id) {

    const booking = {
      booking: {
        professional_id: professional_id
      }
    };

    return this.api.post('v1/lecturers/events/' + event_id + '/bookings', booking);
  }

  getBookings(professional_id) {
    return this.api.get('/v1/professionals/bookings');
  }

  acceptBooking(booking_id) {
    return this.api.post('/v1/professionals/bookings/' + booking_id + '/approvals/', {});
  }

  rejectBooking(booking_id) {
    return this.api.delete('/v1/professionals/bookings/' + booking_id + '/approvals/');
  }

}
