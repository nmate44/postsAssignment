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
    this.getpostsService.newPost(this.userId, this.title, this.body);
  }

  back(): void {
    this.router.navigate(['posts']);
  }

}
