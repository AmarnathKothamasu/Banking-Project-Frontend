import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  loginUser(): void {
    if (this.loginForm.valid) {

      const loginDetails = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.userService.login(loginDetails).subscribe(response => {
        console.log('Login successful', response);
        const jwtToken = response.jwtToken;

        // Store the token in session storage
        sessionStorage.setItem('jwtToken', jwtToken);
        this.router.navigate(['/home']);

        //this.toastr.success('Login Successful');
      }, error => {
        console.error('Error logging in', error);
        // Handle error appropriately, show error message to the user, etc.
      });
    } else {
      // Form is invalid, display error messages or take appropriate action
    }
  }
}
