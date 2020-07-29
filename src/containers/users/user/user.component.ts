import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../models/User";
import { MatDialog } from "@angular/material/dialog";
import { AddUserComponent } from "src/components/dialogs/addUser/addUser.component";
import { DeleteUserComponent } from "src/components/dialogs/deleteUser/deleteUser.component";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  @Input() user: User;

  ngOnInit() {}

  onDelete(user: User) {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: { user: user },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }
}
