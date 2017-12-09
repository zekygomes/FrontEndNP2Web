import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {postsRouting} from './post-routing.module'
import {PostsComponent} from './posts.component'

@NgModule({
  imports: [
    CommonModule,
    postsRouting
  ],
  declarations: [PostsComponent]
})
export class PostsModule { }
