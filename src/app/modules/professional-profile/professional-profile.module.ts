import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MatIconModule, MatButtonModule, MatCardModule, MatTabsModule } from '@angular/material';
import { ContentComponent } from './content/content.component';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    CommentsModule
  ],
  declarations: [HeaderComponent, ProfileComponent, ContentComponent]
})
export class ProfessionalProfileModule { 
  
}