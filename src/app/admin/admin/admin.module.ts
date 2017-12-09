import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AdminComponent } from './admin.component';
import { AdminPostComponent } from '../admin-post/admin-post.component';
import { AdminUserComponent } from '../admin-user/admin-user.component';
import { adminRouting } from './admin.routes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    adminRouting
  ],
  declarations: [AdminComponent, AdminPostComponent, AdminUserComponent]
})
export class AdminModule { }
