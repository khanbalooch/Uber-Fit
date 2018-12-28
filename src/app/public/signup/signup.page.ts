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
  /* constructor(private formBuilder: FormBuilder) {
         this.form = formBuilder.group({
             username: ['', [Validators.required, Validators.minLength(4)]],
             email: ['', [Validators.required, Validators.email]],
             password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{6,}')]]
         });
     }

     form: FormGroup;
     formSettings = {
         theme: 'ios',
     };

     triedToSubmit: boolean = false;

     submit() {
         this.triedToSubmit = true;
         if (this.form.invalid) {
             for (var control in this.form.controls) {
                 this.form.controls[control].markAsDirty();
                 this.form.controls[control].markAsTouched();
             }
         }
     }

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
     }

     errorFor(field) {
         var control = this.form.controls[field];
         for (var validator in control.errors) {
             if (control.errors[validator]) {
                 return this.errorMessages[field][validator];
             }
         }
         return null;
     }*/

}
