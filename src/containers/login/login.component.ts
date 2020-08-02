import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiService } from "../../services/Api.service";
import { ApiResponse, ResponseStatus } from "../../models/ApiResponse";
import { Router } from "@angular/router";
import { AppService } from "src/services/App.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, AfterViewInit {
  constructor(
    private server: ApiService,
    private router: Router,
    private app: AppService
  ) {}
  hide = true;
  rememberMe = false;
  @ViewChild("signInForm", { static: true }) form: NgForm;
  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.form);

    let user = JSON.parse(localStorage.getItem("savedUser"));
    if (user) {
      setTimeout(() => {
        this.rememberMe = true;
        this.form.setValue(user);
      });
    }
  }

  onSignIn(form: NgForm) {
    if (form.invalid) return;
    if (this.rememberMe) {
      localStorage.setItem("savedUser", JSON.stringify(form.value));
    } else {
      localStorage.removeItem("savedUser");
    }
    const { loginName, password } = form.value;
    this.server.SignIn(loginName, password).subscribe((res: ApiResponse) => {
      if (res.status == ResponseStatus.Success) {
        localStorage.setItem("token", res.token);

        this.app.setUser(res.data);
        this.router.navigateByUrl("/home");
      }
    });
  }
}
