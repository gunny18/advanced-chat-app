import { IApiResponse } from "../interfaces";

export default class ApiResponse implements IApiResponse {
  constructor(
    public statusCode: number,
    public data: Record<string, unknown> | void | undefined | null,
    public message: string = "Success"
  ) {
    if (!data) {
      data = null;
    }
    this.data = data;
  }
}
