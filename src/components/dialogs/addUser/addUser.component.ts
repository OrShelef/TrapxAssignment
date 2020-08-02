import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NgForm } from "@angular/forms";
import { Role } from "../../../models/User";
import { ApiService } from "src/services/Api.service";
import { ApiResponse, ResponseStatus } from "../../../models/ApiResponse";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-addUser",
  templateUrl: "./addUser.component.html",
  styleUrls: ["./addUser.component.css"],
})
export class AddUserComponent implements OnInit {
  roles = Object.keys(Role);
  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private server: ApiService,
    private snackbar: MatSnackBar
  ) {}
  ngOnInit() {}

  onAddUser(form: NgForm) {
    if (form.invalid) return;

    this.server.AddUser(form.value).then((isAdded) => {
      if (isAdded) {
        this.dialogRef.close();
        this.snackbar.open("New user is added!", null, { duration: 2000 });
      }
    });
  }
}
