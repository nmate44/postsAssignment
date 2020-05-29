import { Component, OnInit } from '@angular/core';
import {GetpostsService} from '../../services/getposts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(
    private getpostsService: GetpostsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.getpostsService.list().length === 0) {
      console.log('*listing: empty localstorage');
      setTimeout(() => (this.posts = this.getpostsService.list()), 1000);
      setTimeout(() => (this.getpostsService.idSet(this.posts)), 1500);
    } else {
      console.log('*listing: getting data from localstorage');
      this.posts = this.getpostsService.list();
    }

  }

  toAddScreen(): void {
    this.router.navigate(['crud/new']);
  }

  deletePost(id: number): void {
    this.getpostsService.deletePost(id);
  }

  reload(): void {
    window.location.reload();
  }

  toEditScreen(id: number): void {
    this.router.navigate(['crud/', id]);
  }

}
