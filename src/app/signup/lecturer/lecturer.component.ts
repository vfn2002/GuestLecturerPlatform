import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApplicationService} from "../../services/application.service";

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  lecturerForm: FormGroup;
  lecturer = {};
  isLoading = false;
  isSignedUp = false;

  constructor(private formBuilder: FormBuilder,
              private application: ApplicationService) {
    /**
     * We initialize the validators for the lecturer sign up form.
     */
    this.lecturerForm = formBuilder.group(
      {
        'firstName': [null, Validators.required],
        'lastName': [null, Validators.required],
        'gender': [null, Validators.required],
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'field': [null, Validators.required],
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
      lecturer: this.lecturer
    };

    this.application.submitLecturer(wrappedLecturer)
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
