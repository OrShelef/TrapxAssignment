export interface ApiResponse {
  status: ResponseStatus;
  data: any;
  token?: string;
}

export enum ResponseStatus {
  Success = "success",
  Fail = "fail",
}
