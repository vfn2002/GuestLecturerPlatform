import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ApplicationService } from '../../../services/application.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  isLoading = false;
  event = <any>{};
  eventForm: FormGroup;

  whatForm: FormGroup;
  whenForm: FormGroup;
  whereForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private application: ApplicationService,
              private router: Router)
  {
    this.eventForm = formBuilder.group(
      {
        'title': [null, Validators.required],
        'description': [null, Validators.required],
        'maxSeats': [null, Validators.required],
        'date': [null, Validators.required],
        'time': [null, Validators.required],
        'location': [null, Validators.required]
      });

    this.whatForm = formBuilder.group(
      {
        'title': [null, Validators.required],
        'description': [null, Validators.required]
      }
    );
    this.whenForm = formBuilder.group(
      {
        'date': [null, Validators.required],
        'time': [null, Validators.required]
      }
    );
    this.whereForm = formBuilder.group(
      {
        'location': [null, Validators.required],
        'maxSeats': [null, Validators.required]
      }
    );

  }



  ngOnInit() {
  }

  submitForm() {
    this.isLoading = true;

    const wrappedEvent = {
      event: this.event
    };

    this.application.submitEvent(wrappedEvent)
      .subscribe(
        res => {
          this.handleSuccess(res.json());
        },
        err => {
          this.handleFailure();
        }
      );
  }

  private handleSuccess(response) {
    /**
     * After event is successfully created, navigate to event.
     */
    this.isLoading = false;
    this.application.addEvent(response);
    this.router.navigate(['/events/' + response.id + '/edit']);
  }

  private handleFailure() {
    this.isLoading = false;
  }
}
