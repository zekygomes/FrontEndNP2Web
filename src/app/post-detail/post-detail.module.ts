import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { postDetailRoutingModule } from './postDetail-routing.module'
import { PostDetailComponent } from './post-detail.component'
import { CommentComponent } from '../comment/comment.component'

@NgModule({
  imports: [
    CommonModule,
    postDetailRoutingModule,
    FormsModule
  ],
  declarations: [PostDetailComponent, CommentComponent]
})
export class PostDetailModule { }
