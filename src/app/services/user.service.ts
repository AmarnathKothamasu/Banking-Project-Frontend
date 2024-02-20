import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  UserUrl = environment.createUserUrl + '/createuser';
  LoginUrl = environment.loginUrl;

  constructor(private http: HttpClient,
    private toastr: ToastrService) {

  }

  createUser(user: { name: string; email: string; password: string; contactNo: string; pin: string; dob: Date; }) {
    return this.http.post<any>(this.UserUrl, user);
  }

  login(loginDetails:any) {
    return this.http.post<any>(this.LoginUrl+'/authenticate', loginDetails);
  }
}
