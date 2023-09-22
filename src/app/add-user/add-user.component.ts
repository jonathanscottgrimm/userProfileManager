import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
   userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      about: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm?.valid) {
      const newUser: User = new User({
        // Generate an ID in a real app scenario
       id: Math.floor(Math.random() * 1000),
        name: this.userForm.value.name,
        about: this.userForm.value.about,
        imageUrl: this.userForm.value.imageUrl
    });

      console.log(newUser);
      // In a real app, you'd use a service to send this data to your backend
    }
  }
}
