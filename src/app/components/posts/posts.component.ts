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
      setTimeout(() => (this.posts = this.getpostsService.list()), 1000);
    } else {
      this.posts = this.getpostsService.list();
    }

  }

  toAddScreen(): void {
    this.router.navigate(['crud']);
  }

  deletePost(id: number): void {
    this.getpostsService.deletePost(id);
  }

  reload(): void {
    window.location.reload();
  }

}
