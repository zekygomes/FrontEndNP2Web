
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { PostService } from '../../service/post.service'
import { Post } from '../../model/post'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  postArr: Post[];

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router, ) { }
  ngOnInit() {
    this.route.data
      .subscribe((data: { postList: Post[] }) => {
        this.postArr = data.postList;
      });
  }

  onParentEvent() {
    this.getPostList();
  }

  getPostList(): void {
    this.postService.getPosts().then(result => {
      this.postArr = result;
    })
  }

  removeAdminForm(id: Number): void {
    this.postService.delete(id).then(result => {
      this.getPostList();
    });
  }
}
