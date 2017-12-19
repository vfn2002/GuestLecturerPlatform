import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SignupComponent} from "./signup/signup.component";
import {StudentComponent} from "./signup/student/student.component";
import {LecturerComponent} from "./signup/lecturer/lecturer.component";
import {ProfessionalComponent} from "./signup/professional/professional.component";
import {EventsComponent} from "./events/events.component";
import {NewEventComponent} from "./events/new-event/new-event.component";
import {EditEventComponent} from "./events/edit-event/edit-event.component";

const APP_ROUTES: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signup/student', component: StudentComponent},
  {path: 'signup/lecturer', component: LecturerComponent},
  {path: 'signup/professional', component: ProfessionalComponent},
  {path: 'events', component: EventsComponent},
  {path: 'events/new', component: NewEventComponent},
  {path: 'events/:id/edit', component: EditEventComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
