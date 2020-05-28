import { Component, OnInit } from '@angular/core';
import {GetpostsService} from '../../services/getposts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(
    private getpostsService: GetpostsService,
  ) { }

  ngOnInit(): void {

    if (this.getpostsService.list().length === 0) {
      setTimeout(() => (this.posts = this.getpostsService.list()), 1000);
    } else {
      this.posts = this.getpostsService.list();
    }
  }

}
