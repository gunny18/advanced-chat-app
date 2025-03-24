import { Request, Response, NextFunction } from "express";
import cors from "cors";

function parseCors() {
  const corsMiddlewareFn = cors();
  return corsMiddlewareFn;
}

export default parseCors;
