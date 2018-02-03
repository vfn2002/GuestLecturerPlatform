import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { LeaveCommentComponent } from './leave-comment/leave-comment.component';
import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { ProfessionalProfileModule } from '../professional-profile/professional-profile.module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentListItemComponent } from './comment-list/comment-list-item/comment-list-item.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { NumberToArrayPipe } from './pipes/number-to-array.pipe';
import { AccountCircleModule } from '../account-circle/account-circle.module';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    AccountCircleModule
  ],
  declarations: [
    CommentSectionComponent,
    LeaveCommentComponent,
    CommentListComponent,
    CommentListItemComponent,
    TimeAgoPipe,
    NumberToArrayPipe
  ],
  exports: [
    CommentSectionComponent
  ]
})
export class CommentsModule { }
