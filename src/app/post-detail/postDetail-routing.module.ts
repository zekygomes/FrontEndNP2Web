import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDetailComponent } from './post-detail.component';
import { CommentComponent } from '../comment/comment.component'
import { PostCommentResolverService } from '../service/post-resolver.service';

const routes: Routes = [
  {
    path: '', component: PostDetailComponent,
    children: [
      {
        path: '',
        component: CommentComponent,
        resolve: {
          commentList: PostCommentResolverService
        }
      }
    ]
  },
];
export const postDetailRoutingModule = RouterModule.forChild(routes);
