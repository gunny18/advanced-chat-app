import { IApiResponse } from "../interfaces";

export default class ApiResponse implements IApiResponse {
  constructor(
    public statusCode: number,
    public data: unknown,
    public message: string = "Success"
  ) {
    if (!data) {
      data = null;
    }
    if (!this.checkValidJson(data)) {
      data = "Could not parse value to JSON";
    }
    this.data = data;
  }

  private checkValidJson(data: unknown) {
    const allowedJsonParsableTypes = ["object", "string", "boolean"];
    const dataType = typeof data;
    return allowedJsonParsableTypes.includes(dataType);
  }
}
