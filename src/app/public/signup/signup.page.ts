import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss','./signup.page.css'],
})

export class SignupPage implements OnInit {// implements OnInit {

  signupDetails = { name: '', email: '', password: '', Cpassword: '' };
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required ]),
    cPassword: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}
  signUp() {
      console.log(this.signupDetails);
    const httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache'
         });
         let options = {
        headers: httpHeaders
         };
      let signUpURL = 'http://apps.capbpm.com/UF/api/v1/person';
        this.http.post(signUpURL, {
            'firstName': this.signupDetails.name,
            'email': this.signupDetails.email,
            'password': this.signupDetails.password,
            
        }, options).subscribe(
            data => {console.log(data);
                this.router.navigate(['/login']);
             },
            error => {console.log(error); }
        );
  }

  gotoLogin() {
    console.log('going to login page');
    this.router.navigateByUrl('/login');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get cPassword() {
    return this.signupForm.get('cPassword');
  }
  get type() {
    return this.signupForm.get('type');
  }

}
