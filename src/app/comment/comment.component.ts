import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { Comment } from '../model/comment'
import { CommentService } from '../service/comment.service'


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentArr;
  postId: number;
  isValid =false;
  constructor(private commentService: CommentService, private route: ActivatedRoute, private router: Router, ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.postId = + params['id']
    });

    this.route.data
      .subscribe((data: { commentList}) => {
        this.commentArr = data.commentList;
      });
  }

  add(theForm: NgForm) {
    let comments = theForm.value;
    let commentObj = {
      post: {id: this.postId},
      comment: comments.content,
      createdTime: new Date(),
      author: comments.nickName
    }

    this.commentService.create(JSON.stringify(commentObj)).then(hero => {
      this.getCommentList()
    });
  }

  getCommentList(): void {
    this.commentService.getCommentByPostId(this.postId).then(result => {
      this.commentArr = result;
    })
  }
}
