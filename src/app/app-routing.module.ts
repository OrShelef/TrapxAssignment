import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "src/containers/login/login.component";
import { UsersComponent } from "src/containers/users/users.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "users", component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
