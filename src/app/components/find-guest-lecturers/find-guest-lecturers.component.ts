import {Component, Inject, OnInit} from '@angular/core';
import { ProfessionalsService } from '../../services/professionals.service';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-find-guest-lecturers',
  templateUrl: './find-guest-lecturers.component.html',
  styleUrls: ['./find-guest-lecturers.component.css']
})
export class FindGuestLecturersComponent implements OnInit {

  isLoading = true;
  event_id: number;
  uniqueTags = [];
  filteredTags = [];
  professionals;
  filteredProfessionals = [];

  constructor(private professionalsService: ProfessionalsService,
              private bookingService: BookingService) {}

  ngOnInit() {
    this.loadProfessionals();
  }

  private loadProfessionals() {
    if (this.professionalsService.professionals) {
      this.professionals = this.professionalsService.professionals;
      this.filteredProfessionals = this.professionals;
      this.uniqueTags = this.getAllTags();
      this.isLoading = false;
    }
    this.observeProfessionals();
  }

  private observeProfessionals() {
    this.professionalsService.observeProfessionals().subscribe(
      professionals => {
        this.professionals = professionals;
        this.filteredProfessionals = this.professionals;
        this.uniqueTags = this.getAllTags();
        this.isLoading = false;
      }
    );
  }

  invite(professional) {
    this.bookingService.bookProfessional(professional.id, this.event_id)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }

  getAllTags(): string[] {
    const uniqueTags = [];
    for (const professional of this.professionals) {
      if (professional.tags) {
        for (const tag of professional.tags.split(',')) {
          if (uniqueTags.indexOf(tag) === -1) {
            uniqueTags.push(tag);
          }
        }
      }
    }
    return uniqueTags;
  }

  addFilter(tag) {
    this.filteredTags.push(tag);
    this.filteredProfessionals = this.getProfessionalsWithFilters();
  }

  removeFilter(tag) {
    this.filteredTags.splice(this.filteredTags.indexOf(tag), 1);
    this.filteredProfessionals = this.getProfessionalsWithFilters();
  }

  toggleFilter(tag) {
    if (this.isFilterActive(tag)) {
      this.removeFilter(tag);
    } else {
      this.addFilter(tag);
    }
  }

  isFilterActive(tag) {
    return this.filteredTags.indexOf(tag) !== -1;
  }

  getProfessionalsWithFilters(): any[] {
    const filteredProfessionals = [];
    for (const professional of this.professionals) {
      const success = this.filteredTags.every(function(tag) {
        return professional.tags.split(',').indexOf(tag) !== -1;
      });
      if (success) {
        filteredProfessionals.push(professional);
      }
    }
    return filteredProfessionals;
  }

}
