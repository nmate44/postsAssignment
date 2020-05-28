import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const CACHE_KEY = 'httpPostCache';

@Injectable({
  providedIn: 'root'
})
export class GetpostsService {

  posts;

  constructor( private http: HttpClient ) {
    if (this.list().length === 0) {
      this.initializePosts();
    }
  }

  public getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public list(): Post[] {
    let localStorageStuff = JSON.parse(localStorage.getItem(CACHE_KEY)) as Post[];
    return localStorageStuff == null ? [] : localStorageStuff;
  }

  public initializePosts(): void {
    this.getPosts().subscribe(data => {
      for (let [key, value] of Object.entries(data)) {
        console.log('iterated data:');
        console.log(value);
        this.addPostToList(value.userId, value.id, value.title, value.body);
      }
    });
  }

  public addPostToList(userId: number, id: number, title: string, body: string): void {
    const post = new Post(userId, id, title, body);

    console.log('adding:');
    console.log(post);

    let posts = this.list();
    posts.push(post);

    localStorage.setItem(CACHE_KEY, JSON.stringify(posts));
  }

  public deletePost(id: number): void {
    let posts = this.list();
    posts = posts.filter((post) => post.id !== id);
    localStorage.setItem(CACHE_KEY, JSON.stringify(posts));
  }
}
