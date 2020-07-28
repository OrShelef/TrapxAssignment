import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, AfterViewInit {
  constructor() {}
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
  }
}
