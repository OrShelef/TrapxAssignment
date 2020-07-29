import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NgForm } from "@angular/forms";
import { Role } from "../../../models/User";
@Component({
  selector: "app-addUser",
  templateUrl: "./addUser.component.html",
  styleUrls: ["./addUser.component.css"],
})
export class AddUserComponent implements OnInit {
  roles = Object.keys(Role);
  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  ngOnInit() {}

  onAddUser(form: NgForm) {
    console.log(form.value);
  }
}
