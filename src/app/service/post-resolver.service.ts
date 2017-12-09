import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Post } from '../model/post'
import { Comment } from '../model/comment'

import { PostService } from './post.service'
import { CommentService } from './comment.service'

@Injectable()
export class PostResolverService implements Resolve<Post> {
  constructor(private postService: PostService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Post> {
    return this.postService.getPosts().then(result => {
      if (result) {
        return result;
      } else {
        this.router.navigate(['/Post']);
        return null;
      }
    })
  }
}

@Injectable()
export class PostDetailResolverService implements Resolve<Post> {
  constructor(private postService: PostService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Post> {
    let PostId = route.params["id"]

    return this.postService.getPost(+PostId).then(result => {
      if (result) {
        return result;
      } else {
        this.router.navigate(['/Post']);
        return null;
      }
    })
  }
}


@Injectable()
export class PrePostResolverService implements Resolve<Post> {

  prePost: Post;
  constructor(private postService: PostService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Post> {
    let PostId = route.params["id"]

    return this.postService.getPosts().then(result => {
      let prePostArr = result.filter(x => x.id > PostId);
      if (prePostArr.length > 0) {
        this.prePost = prePostArr[0];
      }
      else {
        this.prePost = new Post();
      }
      return this.prePost;
    })
  }
}


@Injectable()
export class NextPostResolverService implements Resolve<Post> {
  nextPost: Post = new Post();
  constructor(private postService: PostService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Post> {
    let PostId = route.params["id"]
    return this.postService.getPosts().then(result => {
      let nextPostArr = result.filter(x => x.id < PostId);
      if (nextPostArr.length > 0) {

        return nextPostArr[nextPostArr.length - 1];
      }
      else {
        return new Post();
      }
    })
  }
}

@Injectable()
export class PostCommentResolverService implements Resolve<Comment> {
  constructor(private commentService: CommentService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Comment> {
    let postId = route.params["id"]
    return this.commentService.getCommentByPostId(+postId).then(result => {
      if (result) {
        return result;
      } else {
        return null;
      }
    })
  }
}
