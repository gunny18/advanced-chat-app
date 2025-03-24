import { NextFunction, Request, Response } from "express";
import { ApiError, AppLogger } from "../../../../utils";
import { IS_DEV_ENV } from "../../../../constants";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = 500;
    const message = error.message;
    error = new ApiError(statusCode, message, [], err.stack);
  }

  const response = {
    ...error,
    message: error.message,
    ...(IS_DEV_ENV ? { stack: error.stack } : {}),
  };

  AppLogger.error(`${error.message}`);

  res.status((error as ApiError).statusCode).json(response);
  return;
};

export default errorHandler;
