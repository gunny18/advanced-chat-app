import { Request, Response, NextFunction } from "express";
import cors from "cors";

function parseCors(req: Request, res: Response, next: NextFunction) {
  cors();
  next();
  return;
}

export default parseCors;
