import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SignupComponent} from "./signup/signup.component";
import {StudentComponent} from "./signup/student/student.component";

const APP_ROUTES: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signup/student', component: StudentComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
