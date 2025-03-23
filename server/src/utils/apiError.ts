class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string = "Something went wrong",
    public errors: any[] = [],
    public stack: string = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, ApiError);
    }
  }
}

export default ApiError;
