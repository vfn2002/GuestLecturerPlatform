import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatFormField,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import {routing} from "./app.routing";
import { DrawerMenuComponent } from './header/drawer-menu/drawer-menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './signup/student/student.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ApplicationService} from "./services/application.service";
import {UserService} from "./services/user.service";
import {ApiService} from "./services/api.service";
import {AuthService} from "./services/auth.service";
import {LoginService} from "./services/login.service";
import {Http, HttpModule} from "@angular/http";
import { LecturerComponent } from './signup/lecturer/lecturer.component';
import { ProfessionalComponent } from './signup/professional/professional.component';
import { EventsComponent } from './events/events.component';
import { EventBoxComponent } from './events/event-box/event-box.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import {EventService} from "./services/event.service";
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { FindGuestLecturersComponent } from './find-guest-lecturers/find-guest-lecturers.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    DrawerMenuComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    LecturerComponent,
    ProfessionalComponent,
    EventsComponent,
    EventBoxComponent,
    NewEventComponent,
    EditEventComponent,
    FindGuestLecturersComponent
  ],
  imports: [
    routing,
    MatListModule,
    MatCardModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatChipsModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpModule
  ],
  providers: [
    LoginService,
    ApplicationService,
    UserService,
    ApiService,
    AuthService,
    EventService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    FindGuestLecturersComponent
  ]
})
export class AppModule { }
