import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ApiError } from "../../../../utils";

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
    return;
  }
  const extractedErrors: any[] = [];
  errors.array().map((err) => extractedErrors.push({ [err.type]: err.msg }));

  //   422
  throw new ApiError(422, "Received data is not valid", extractedErrors);
};

export default validate;
