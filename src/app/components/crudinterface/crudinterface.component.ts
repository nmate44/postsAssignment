import { Component, OnInit } from '@angular/core';
import {GetpostsService} from '../../services/getposts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/post';

@Component({
  selector: 'app-crudinterface',
  templateUrl: './crudinterface.component.html',
  styleUrls: ['./crudinterface.component.css']
})
export class CrudinterfaceComponent implements OnInit {
  userId: number;
  title: string;
  body: string;

  post: Post;

  constructor(
    private getpostsService: GetpostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id !== undefined) {
      this.post = this.getpostsService.findPostById(Number(this.activatedRoute.snapshot.params.id));
      this.userId = this.post.userId;
      this.title = this.post.title;
      this.body = this.post.body;
    }
  }

  postIt(): void {
    if (this.activatedRoute.snapshot.params.id === undefined) {
      console.log('adding post...');
      if (this.userId === null) {
        alert('Fill all the input fields correctly!');
      } else if (this.title === null) {
        alert('Fill all the input fields correctly!');
      } else if (this.body == null) {
        alert('Fill all the input fields correctly!');
      } else {
        this.getpostsService.newPost(this.userId, this.title, this.body);
        this.back();
      }
    } else {
      console.log('editing post...');
      this.getpostsService.editPost(this.post.id, this.userId, this.title, this.body);
      this.back();
    }
  }

  back(): void {
    this.router.navigate(['posts']);
  }

}
