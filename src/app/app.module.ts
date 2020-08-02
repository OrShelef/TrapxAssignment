import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/material/material.module";
import { LoginComponent } from "src/containers/login/login.component";
import { UsersComponent } from "src/containers/users/users.component";
import { VideoBackgroundComponent } from "src/components/videoBackground/videoBackground.component";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserComponent } from "../containers/users/user/user.component";
import { AddUserComponent } from "../components/dialogs/addUser/addUser.component";
import { DeleteUserComponent } from "../components/dialogs/deleteUser/deleteUser.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "../containers/home/home.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    VideoBackgroundComponent,
    UserComponent,
    AddUserComponent,
    DeleteUserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
