import { Component, NgModule } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [FormsModule, NgIf],
  standalone: true
})
export class SignInComponent {

  constructor(private userService: UserService,
              private router: Router
  ) { }

  credentials: IUserCredentials = {email: '', password: ''};
  signInError: boolean = false;
  signIn(){
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe({
      next: () =>  this.router.navigate(['/home']),
      error: () => this.signInError = true
    });
   
  }
}
