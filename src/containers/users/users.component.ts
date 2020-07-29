import { Component, OnInit } from "@angular/core";
import { User, Role } from "src/models/User";
import { MatDialog } from "@angular/material";
import { AddUserComponent } from "src/components/dialogs/addUser/addUser.component";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  users: User[] = [
    {
      userName: "heifohe",
      password: "sdsds",
      loginName: "yossi",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      role: Role.Guest,
    },
    {
      userName: "sdsd",
      password: "qqq",
      loginName: "moshe",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      role: Role.Guest,
    },
  ];
  ngOnInit() {}

  onAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: "80vw",
      data: "",
    });

    dialogRef.afterClosed().subscribe((res) => {});
  }
}
