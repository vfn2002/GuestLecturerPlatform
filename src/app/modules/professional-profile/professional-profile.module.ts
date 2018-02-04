import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MatIconModule, MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MatTooltipModule } from '@angular/material';
import { ContentComponent } from './content/content.component';
import { CommentsModule } from '../comments/comments.module';
import { AccountCircleModule } from '../account-circle/account-circle.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    CommentsModule,
    AccountCircleModule,
    MatChipsModule,
    MatTooltipModule
  ],
  declarations: [HeaderComponent, ProfileComponent, ContentComponent, SideBarComponent, AboutComponent]
})
export class ProfessionalProfileModule { 

}