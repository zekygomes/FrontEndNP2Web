import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { PostService } from '../service/post.service'
import { Post } from '../model/post'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  prePost: Post;
  nextPost: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router, ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { post: Post, prePost: Post, nextPost: Post }) => {
        this.post = data.post;
        if (data.nextPost.id) {
          this.nextPost = data.nextPost;
        } else {
          this.nextPost = new Post();
        }
        this.prePost = data.prePost;
      });
  }
}
