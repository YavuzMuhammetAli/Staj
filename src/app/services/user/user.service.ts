import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Post } from 'src/app/models/post';
import { user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //observable observer subscriber

  getAllUsers() {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users').pipe(
      tap({
        next: (res) => { return res },
        error: (err) => console.error(err)
      })
    )
  }

  getSelectedUser(id: number) {
    return this.http.get<user>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      tap({
        next: (res) => { return res },
        error: (err) => console.error(err)
      })
    )
  }

  public getAllPosts(id: number){
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  }
}
