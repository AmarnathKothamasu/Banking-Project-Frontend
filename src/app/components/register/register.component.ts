import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contactNo: ['', Validators.required],
      pin: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }
  createUser(): void {
    if (this.userForm.valid) {
      const user = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        contactNo: this.userForm.value.contactNo,
        pin: this.userForm.value.pin,
        dob: this.userForm.value.dob
      };

      this.userService.createUser(user).subscribe(res=>{
        alert("SignUp Successfull");
        this.userForm.reset();
        this.router.navigate(['/login']);
     },
     err=>{
      alert("Sign Up is unSuccessfull")
     })
  }
}
}