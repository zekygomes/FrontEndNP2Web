import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Post } from '../model/post';

@Injectable()
export class PostService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private strUrl = '/api/public/post/';
  private loggedIn = !!localStorage.getItem('auth_token');
  
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.strUrl)
      .toPromise().then(response =>{console.log(response.json()); return response.json()} )
      .catch(this.handleError);
  }


  getPost(id: Number) {
    const url = `${this.strUrl}${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json()[0])
      .catch(this.handleError);
  }

  getPostsOf(id: Number): Post[]{

    return null;
  }

  update(hero: Post): Promise<Post> {
    const url = `${this.strUrl}${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }


  create(PostObj: string): Promise<Post> {
    return this.http
      .post(this.strUrl, PostObj, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Post)
      .catch(this.handleError);
  }

  delete(id: Number): Promise<void> {
    const url = `${this.strUrl}${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
