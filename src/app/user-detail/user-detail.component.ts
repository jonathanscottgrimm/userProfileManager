import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { IUser } from '../models/user.model.interface';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user?: User;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

   ngOnInit() {

    this.fetchUser();

   }

  async fetchUser() {
  const userId = this.route.snapshot.paramMap.get('id');
  console.log("User ID:", userId);

  const user = await this.http
    .get<IUser>(`https://reqres.in/api/users/${userId}`)
    .toPromise();

  console.log(user);

  if ( user && user.data) {
    this.user = new User({
      id: user.data.id,
      name: `${user.data.first_name} ${user.data.last_name}`,
      email: user.data.email,
      imageUrl: user.data.avatar
    });

    console.log(this.user)
  }
}






  }

