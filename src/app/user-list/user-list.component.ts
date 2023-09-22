import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root } from '../models/user.model.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

async fetchUsers() {
  const root = await this.http.get<Root>('https://reqres.in/api/users/').toPromise();

  if (root) {
    this.users = root.data.flatMap(user => new User({
      id:  user.id,
      name:  `${user.first_name} ${user.last_name}`,
      about: "about me here",
      imageUrl: user.avatar
    }));
  }
}
  }


