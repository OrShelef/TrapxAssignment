import { Component, OnInit, AfterViewInit } from "@angular/core";
import { User, Role } from "src/models/User";
import { MatDialog } from "@angular/material";
import { AddUserComponent } from "src/components/dialogs/addUser/addUser.component";
import { ApiService } from "src/services/Api.service";
import { ApiResponse, ResponseStatus } from "src/models/ApiResponse";
import { Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements AfterViewInit {
  constructor(
    public dialog: MatDialog,
    private server: ApiService,
    private router: Router
  ) {}
  users: User[] = [];
  async ngAfterViewInit() {
    try {
      this.users = await this.server.GetAllUsers();
    } catch (error) {}
  }

  onAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: "80vw",
      data: "",
    });

    dialogRef.afterClosed().subscribe((res) => {});
  }
}
