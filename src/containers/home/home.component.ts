import { Component, OnInit } from "@angular/core";
import { AppService } from "../../services/App.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(public app: AppService, private router: Router) {}

  ngOnInit() {}

  onUsersClick() {
    this.router.navigateByUrl("/users");
  }
}
