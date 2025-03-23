import { IApiResponse } from "../interfaces";

export default class ApiResponse implements IApiResponse {
  constructor(
    public statusCode: number,
    public data: Record<string, unknown> | null,
    public message: string = "Success"
  ) {}
}
