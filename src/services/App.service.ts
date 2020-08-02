import { Injectable } from "@angular/core";
import { User, Role } from "src/models/User";
import { JsonPipe } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor() {}

  currentUser: User = JSON.parse(localStorage.getItem("currentUser"));

  setUser(user: User) {
    this.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  isGuest(): boolean {
    return this.currentUser && this.currentUser.role == Role.Guest;
  }
}
