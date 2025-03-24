import { Request, Response, NextFunction, json } from "express";

function parseJson(req: Request, res: Response, next: NextFunction) {
  json();
  next();
  return;
}

export default parseJson;
