import { Component, OnInit } from '@angular/core';
import {GetpostsService} from '../../services/getposts.service';

@Component({
  selector: 'app-crudinterface',
  templateUrl: './crudinterface.component.html',
  styleUrls: ['./crudinterface.component.css']
})
export class CrudinterfaceComponent implements OnInit {

  constructor(
    private getpostsService: GetpostsService,
  ) { }

  ngOnInit(): void {
  }

}
