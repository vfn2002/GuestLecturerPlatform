import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApplicationService } from '../../../services/application.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  professionalForm: FormGroup;
  professional = {};
  isLoading = false;
  isSignedUp = false;

  constructor(private formBuilder: FormBuilder,
              private application: ApplicationService) {
    /**
     * We initialize the validators for the professional sign up form.
     */
    this.professionalForm = formBuilder.group(
      {
        'firstName': [null, Validators.required],
        'lastName': [null, Validators.required],
        'gender': [null, Validators.required],
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'company': [null, Validators.required],
        'education': [null, Validators.required],
        'tags': [null, Validators.required],
        'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
        'passwordConfirm': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
      },
      {
        validators: PasswordValidation.matchPassword
      });
  }

  ngOnInit() {
  }

  /**
   * Submit form is called from the template, when the user presses the submit button.
   */
  submitForm() {
    this.isLoading = true;

    const wrappedLecturer = {
      professional: this.professional
    };

    this.application.submitProfessional(wrappedLecturer)
      .subscribe(
        res => {
          this.handleSuccess();
        },
        err => {
          this.handleFailure();
        }
      );
  }

  private handleSuccess() {
    this.isLoading = false;
    this.isSignedUp = true;
  }

  private handleFailure() {
    this.isLoading = false;
  }
}

export class PasswordValidation {

  static matchPassword(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const confirmPassword = AC.get('passwordConfirm').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('confirmPassword').setErrors({MatchPassword: true});
    } else {
      return null;
    }
  }
}
