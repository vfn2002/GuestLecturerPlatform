import {RouterModule, Routes} from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentComponent } from './components/signup/student/student.component';
import { LecturerComponent } from './components/signup/lecturer/lecturer.component';
import { ProfessionalComponent } from './components/signup/professional/professional.component';
import { EventsComponent } from './components/events/events.component';
import { NewEventComponent } from './components/events/new-event/new-event.component';
import { ViewEventComponent } from './components/events/view-event/view-event.component';
import { EditEventComponent } from './components/events/edit-event/edit-event.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './modules/professional-profile/profile/profile.component';

const APP_ROUTES: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signup/student', component: StudentComponent},
  {path: 'signup/lecturer', component: LecturerComponent},
  {path: 'signup/professional', component: ProfessionalComponent},
  {path: 'events', component: EventsComponent},
  {path: 'events/new', component: NewEventComponent},
  {path: 'events/:id', component: ViewEventComponent},
  {path: 'events/:id/edit', component: EditEventComponent},
  {path: 'notifications', component: NotificationsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
