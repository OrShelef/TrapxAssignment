import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "src/models/User";
import { ApiResponse, ResponseStatus } from "../models/ApiResponse";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUrl = "http://localhost:3333/api/v1/users/";
  users: User[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  GetAllUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl, { headers: this.getHeaders() }).subscribe(
        (res: ApiResponse) => {
          if (res.status == ResponseStatus.Success) {
            this.users = res.data;
            resolve(this.users);
          } else {
            reject();
          }
        },
        (err) => {
          if (err.status == 403) {
            this.router.navigateByUrl("/home");
          }
        }
      );
    });
  }

  SignIn(loginName: String, password: String) {
    return this.http.post(this.baseUrl + "signIn", { loginName, password });
  }

  AddUser(user: User) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + "signUp", user)
        .subscribe((res: ApiResponse) => {
          if (res.status == ResponseStatus.Success) {
            this.users.push(res.data);
            resolve(true);
          } else reject();
        });
    });
  }

  Delete(user: User) {
    return new Promise((resolve, reject) => {
      this.http
        .delete(this.baseUrl + `/${user._id}`, {
          headers: this.getHeaders(),
        })
        .subscribe((res: ApiResponse) => {
          if (res.status == ResponseStatus.Success) {
            this.users.splice(
              this.users.findIndex((u) => u._id == user._id),
              1
            );

            resolve(true);
          } else reject();
        });
    });
  }

  getHeaders() {
    const auth_token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + auth_token,
    });

    return headers;
  }
}
