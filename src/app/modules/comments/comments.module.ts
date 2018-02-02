import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { LeaveCommentComponent } from './leave-comment/leave-comment.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { ProfessionalProfileModule } from '../professional-profile/professional-profile.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [CommentSectionComponent, LeaveCommentComponent],
  exports: [
    CommentSectionComponent
  ]
})
export class CommentsModule { }
