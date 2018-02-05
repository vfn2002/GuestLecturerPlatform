import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatFormField,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBarModule, MatStepperModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import {routing} from './app.routing';
import { DrawerMenuComponent } from './components/header/drawer-menu/drawer-menu.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentComponent } from './components/signup/student/student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApplicationService} from './services/application.service';
import {UserService} from './services/user.service';
import {ApiService} from './services/api.service';
import {AuthService} from './services/auth.service';
import {LoginService} from './services/login.service';
import {Http, HttpModule} from '@angular/http';
import { LecturerComponent } from './components/signup/lecturer/lecturer.component';
import { ProfessionalComponent } from './components/signup/professional/professional.component';
import { EventsComponent } from './components/events/events.component';
import { EventBoxComponent } from './components/events/event-box/event-box.component';
import { NewEventComponent } from './components/events/new-event/new-event.component';
import {EventService} from './services/event.service';
import { EditEventComponent } from './components/events/edit-event/edit-event.component';
import { FindGuestLecturersComponent } from './components/find-guest-lecturers/find-guest-lecturers.component';
import { ViewEventComponent } from './components/events/view-event/view-event.component';
import {ProfessionalsService} from './services/professionals.service';
import { GuestLecturerItemComponent } from './components/find-guest-lecturers/guest-lecturer-item/guest-lecturer-item.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationItemComponent } from './components/notifications/notification-item/notification-item.component';
import {NotificationService} from './services/notification.service';
import {BookingService} from './services/booking.service';
import { SearchComponent } from './components/events/search/search.component';
import { SpeakerBoxComponent } from './components/events/view-event/speaker-box/speaker-box.component';
import { ProfessionalProfileModule } from './modules/professional-profile/professional-profile.module';
import { CommentsModule } from './modules/comments/comments.module';
import { AccountCircleModule } from './modules/account-circle/account-circle.module';
import { FooterModule } from './modules/footer/footer.module';

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
    FindGuestLecturersComponent,
    ViewEventComponent,
    GuestLecturerItemComponent,
    NotificationsComponent,
    NotificationItemComponent,
    SearchComponent,
    SpeakerBoxComponent
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
    MatStepperModule,
    HttpModule,
    MatMenuModule,
    ProfessionalProfileModule,
    AccountCircleModule,
    FooterModule
  ],
  providers: [
    LoginService,
    ApplicationService,
    UserService,
    ApiService,
    AuthService,
    EventService,
    ProfessionalsService,
    NotificationService,
    BookingService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    FindGuestLecturersComponent
  ]
})
export class AppModule { }
