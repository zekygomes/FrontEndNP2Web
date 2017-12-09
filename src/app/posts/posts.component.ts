import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostService } from '../service/post.service'
import { Post } from '../model/post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postArr: Post[];

  constructor(private postService: PostService, 
    private route: ActivatedRoute, 
    private router: Router, ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { postList: Post[] }) => {
        this.postArr = data.postList;
      });
  }

}
