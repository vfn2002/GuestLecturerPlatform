import {Component, Inject, OnInit} from '@angular/core';
import {ProfessionalsService} from "../services/professionals.service";
import {BookingService} from "../services/booking.service";

@Component({
  selector: 'app-find-guest-lecturers',
  templateUrl: './find-guest-lecturers.component.html',
  styleUrls: ['./find-guest-lecturers.component.css']
})
export class FindGuestLecturersComponent implements OnInit {

  isLoading = true;
  event_id: number;
  professionals;

  constructor(private professionalsService: ProfessionalsService,
              private bookingService: BookingService) {}

  ngOnInit() {
    this.loadProfessionals();
  }

  private loadProfessionals() {
    if (this.professionalsService.professionals) {
      this.professionals = this.professionalsService.professionals;
      this.isLoading = false;
    }
    this.observeProfessionals();
  }

  private observeProfessionals() {
    this.professionalsService.observeProfessionals().subscribe(
      professionals => {
        this.professionals = professionals;
        this.isLoading = false;
      }
    )
  }

  invite(professional) {
    this.bookingService.bookProfessional(professional.id, this.event_id)
      .subscribe(
        res => {
          console.log(res);
        }
      )
  }
}
