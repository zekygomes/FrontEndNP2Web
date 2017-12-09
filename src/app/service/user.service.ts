import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from '../model/user';

@Injectable()
export class UserService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private strUrl = '/api/public/user/';
  private loggedIn = !!localStorage.getItem('auth_token');
  
  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.strUrl)
      .toPromise().then(response =>{console.log(response.json()); return response.json()} )
      .catch(this.handleError);
  }

  getUser(id: Number) {
    const url = `${this.strUrl}${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json()[0])
      .catch(this.handleError);
  }

  getUsersOf(id: Number): User[]{

    return null;
  }

  create(UserObj: string): Promise<User> {
    return this.http
      .post(this.strUrl, UserObj, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User)
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
