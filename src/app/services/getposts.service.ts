import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs';

const CACHE_KEY = 'httpPostCache';

@Injectable({
  providedIn: 'root'
})
export class GetpostsService {

  private nextId: number;
  posts;

  constructor( private http: HttpClient ) {
    this.posts = this.list();

    if (this.posts.length === 0) {
      console.log('empty');
      this.initializePosts();
      console.log(this.list());
      this.idSet(this.posts);
    } else {
      this.idSet(this.posts);
    }

  }

  public getPosts(): Observable<Post[]>{
    console.log('getting data from API...');
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public list(): Post[] {
    let localStorageStuff = JSON.parse(localStorage.getItem(CACHE_KEY)) as Post[];
    return localStorageStuff == null ? [] : localStorageStuff;
  }

  public initializePosts(): void {
    console.log('initializing...');
    this.getPosts().subscribe(data => {
      for (let [key, value] of Object.entries(data)) {
        this.addPostToList(value.userId, value.id, value.title, value.body);
        console.log(data);
      }
    });
  }

  public addPostToList(userId: number, id: number, title: string, body: string): void {
    const post = new Post(userId, id, title, body);

    let posts = this.list();
    posts.push(post);

    posts.sort((p1, p2) => (p1.id > p2.id) ? 1 : -1);
    localStorage.setItem(CACHE_KEY, JSON.stringify(posts));
  }

  public newPost(userId: number, title: string, body: string): void {
    let post = new Post(userId, this.nextId, title, body);

    let posts = this.list();
    posts.push(post);

    localStorage.setItem(CACHE_KEY, JSON.stringify(posts));
    this.nextId++;
    console.log(this.nextId);
  }

  public deletePost(id: number): void {
    let posts = this.list();
    posts = posts.filter((post) => post.id !== id);
    localStorage.setItem(CACHE_KEY, JSON.stringify(posts));
  }

  findPostById(id: number): Post {
    const posts = this.list();
    for (const post of posts) {
      console.log(post);
      if (post.id === id) {
        console.log(post);
        return post;
      }
    }
    return undefined;
  }

  editPost(id: number, userId: number, title: string, body: string): void {
    let posts = this.list();
    let post = new Post(userId, id, title, body);
    posts = posts.filter((p) => p.id !== id);
    posts.push(post);
    posts.sort((p1, p2) => (p1.id > p2.id) ? 1 : -1);
    localStorage.setItem(CACHE_KEY, JSON.stringify(posts));
  }

  idSet(posts: Post[]): void {
    let idCheck = this.list();
    console.log(idCheck);
    if (idCheck.length === 0) {
      this.nextId = 0;
    } else {
      let maxId = idCheck[idCheck.length - 1].id;
      this.nextId = maxId + 1;
    }
    console.log(this.nextId);
  }
}
