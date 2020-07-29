import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-deleteUser",
  templateUrl: "./deleteUser.component.html",
  styleUrls: ["./deleteUser.component.css"],
})
export class DeleteUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  ngOnInit() {}
}
