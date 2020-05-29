import { Component, OnInit } from '@angular/core';
import {GetpostsService} from '../../services/getposts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crudinterface',
  templateUrl: './crudinterface.component.html',
  styleUrls: ['./crudinterface.component.css']
})
export class CrudinterfaceComponent implements OnInit {
  userId: number;
  title: string;
  body: string;

  constructor(
    private getpostsService: GetpostsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  newPost(): void {
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
  }

  back(): void {
    this.router.navigate(['posts']);
  }

}
