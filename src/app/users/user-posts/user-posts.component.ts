import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../model/post";
import {PostService} from "../../service/post.service";
import {User} from "../user.model";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  @Input() user: User;
  posts: Post[];

  constructor(private _postsService: PostService) { }

  ngOnInit() {
    this.posts = this._postsService.getPostsOf(this.user.id)
  }

}
