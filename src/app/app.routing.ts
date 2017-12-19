import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SignupComponent} from "./signup/signup.component";
import {StudentComponent} from "./signup/student/student.component";
import {LecturerComponent} from "./signup/lecturer/lecturer.component";
import {ProfessionalComponent} from "./signup/professional/professional.component";

const APP_ROUTES: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signup/student', component: StudentComponent},
  {path: 'signup/lecturer', component: LecturerComponent},
  {path: 'signup/professional', component: ProfessionalComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
