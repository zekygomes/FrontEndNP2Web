
import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Post } from '../../model/post'
import { NgForm } from '@angular/forms';
import { PostService } from '../../service/post.service'

@Component({
  selector: 'admin-form-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;
  postModel: Post = new Post();

  @Output() onParentEvent = new EventEmitter();

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  addOrUpdatePost(post: Post) {
    if (post.id) {
      this.postService.update(post).then(result => {
        this.hidePostFormModal();
        this.onParentEvent.emit();
      });
    } else {
      let commentObj = {
        id: (new Date()).valueOf(),
        title: post.title,
        content: post.content,
        createdTime: new Date(),
        author: {id: 1},//post.author,
        viewCount: 1
      }

      this.postService.create(JSON.stringify(commentObj)).then(result => {
        this.hidePostFormModal();
        this.onParentEvent.emit();
      });
    }
  }

  public adminForm(id: Number): void {
    if (id) {
      this.postService.getPost(id).then(result => {
        this.postModel = result;
      })
    }
    else {
      this.postModel = new Post();
    }
    this.childModal.show();
  }

  public hidePostFormModal(): void {
    this.childModal.hide();
  }
}
