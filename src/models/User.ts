export interface User {
  userName: string;
  password: string;
  image: string;
  loginName: string;
  role: Role;
  _id: string;
}

export enum Role {
  Guest = "Guest",
  Regular = "Regular",
  Administrator = "Administrator",
}
