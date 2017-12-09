import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsModule } from './posts/posts.module';
import { PostDetailModule } from './post-detail/post-detail.module';
import { AdminModule } from './admin/admin/admin.module'

import { PostResolverService, PostDetailResolverService, 
    PostCommentResolverService, NextPostResolverService, 
    PrePostResolverService } from './service/post-resolver.service';

export function loadPostsModule() { return PostsModule; }
export function loadPostDetailModule() { return PostDetailModule; }
export function loadAdminModule() { return AdminModule; }

import { LoginComponent } from './admin/admin/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin',component: LoginComponent },
  {
    path: 'auth',
    loadChildren: loadAdminModule,
    resolve: {
      postList: PostResolverService
    }
  },
  {
    path: 'home',
    loadChildren: loadPostsModule,
    resolve: {
      postList: PostResolverService
    }
  },
  {
    path: 'blog',
    loadChildren: loadPostsModule,
    resolve: {
      postList: PostResolverService
    }
  },
  {
    path: 'details/:id',
    loadChildren: loadPostDetailModule,
    resolve: {
      post: PostDetailResolverService,
      prePost: PrePostResolverService,
      nextPost: NextPostResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PostResolverService, 
    PostDetailResolverService, 
    NextPostResolverService, 
    PrePostResolverService, 
    PostCommentResolverService]
})

export class AppRoutingModule { }
