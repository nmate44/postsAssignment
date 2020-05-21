import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const CACHE_KEY = 'httpPostCache';

@Injectable({
  providedIn: 'root'
})
export class GetpostsService {

  posts;

  constructor( private http: HttpClient ) {
    this.posts = this.getPosts();
    this.posts.subscribe(next => {
      localStorage[CACHE_KEY] = JSON.stringify(next); });
  }

  public getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
