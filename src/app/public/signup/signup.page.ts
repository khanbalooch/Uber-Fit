import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {// implements OnInit {

  triedToSubmit = false;
  errorMessages = {
    username: {
        required: 'Name required',
        minlength: 'Please enter at least 4 characters.'
    },
    email: {
        required: 'Email required',
        email: 'Invalid email address'
    },
    password: {
        required: 'Password required',
        pattern: 'Invalid, please see rules'
    }
};
signupDetails = { name: '', email: '', password: '' };
constructor(private router: Router) {}

ngOnInit() {}

gotoLogin() {
  console.log('going to login page');
  this.router.navigateByUrl('/login');
}


}
