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
    this.posts = this.getpostsService.getPosts();
  }

}
