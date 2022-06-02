import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const urlAPI  = 'http://localhost:3001/'
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(user: any) {
      return this.http.post(`${urlAPI}/signup`, user);
  }
  signIn(user:any) {
    return this.http.post(`${urlAPI}/signin`,user);
  }
}
