
import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { User } from '../../model/user'
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service'

@Component({
  selector: 'admin-form-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;
  userModel: User = new User();

  @Output() onParentEvent = new EventEmitter();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  addUser(user: User) {
    let userObj = {
      name: user.name,
      email: user.email,
      password: user.password
    }

    this.userService.create(JSON.stringify(userObj)).then(result => {
      this.hideUserFormModal();
    });
    
  }

  public userForm(): void {
    this.userModel = new User();
    
    this.childModal.show();
  }

  public hideUserFormModal(): void {
    this.childModal.hide();
  }
}
