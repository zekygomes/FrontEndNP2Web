import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../model/user';
import { Promise } from 'q';

@Injectable()
export class LoginService {
  private loggedIn = false;
  private strUrl = '/api/login/';
  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('token');
  }

  login(login: string, password: string) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    let body =JSON.stringify({'email': login,'password': password});

    let resLogin = this.http
    .post(this.strUrl,body,{ headers })
    .map(res =>  res.json())
    .toPromise()
    .then(res => {
      localStorage.setItem('token', res.token);
      return res;
    });

  return resLogin;

  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
