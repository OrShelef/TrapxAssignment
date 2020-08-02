import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../models/User";
import { MatDialog } from "@angular/material/dialog";
import { AddUserComponent } from "src/components/dialogs/addUser/addUser.component";
import { DeleteUserComponent } from "src/components/dialogs/deleteUser/deleteUser.component";
import { ApiService } from "src/services/Api.service";
import { ApiResponse, ResponseStatus } from "src/models/ApiResponse";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private server: ApiService,
    private snackbar: MatSnackBar
  ) {}
  @Input() user: User;

  ngOnInit() {}

  onDelete(user: User) {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: { user: user },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.server.Delete(user).then((isRemoved) => {
          if (isRemoved) {
            this.snackbar.open(
              `${user.userName} was deleted successfully`,
              null,
              { duration: 2000 }
            );
          }
        });
      }
    });
  }
}
