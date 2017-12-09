import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { PostService } from './service/post.service';
import { CommentService } from './service/comment.service';
import { UserService } from './service/user.service';

import { AppComponent } from './app.component';
import { MdlModule } from 'angular2-mdl';
import { LoginService } from './service/login.service';
import { LoginComponent } from './admin/admin/login/login.component';
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MdlModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PostService, CommentService, LoginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
