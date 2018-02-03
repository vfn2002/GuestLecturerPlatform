import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCircleComponent } from './profile-circle/profile-circle.component';
import { UserInitialsPipe } from './user-initials.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UserInitialsPipe,
    ProfileCircleComponent
  ],
  declarations: [ProfileCircleComponent, UserInitialsPipe]
})
export class AccountCircleModule { }
