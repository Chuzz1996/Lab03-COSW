import{Component, OnInit}from '@angular/core';

import {TodoService}from '../../services/todo.service';
import {Todo}from '../../models/todo';
import { User } from '../../models/user';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  private users: User[] = [];

  constructor(public userService: UserService) {

  }

  ngOnInit() {
    this.userService.list().subscribe(usersResponse=>{
      console.log(usersResponse);
      this.users = usersResponse;

    });
  }

}
