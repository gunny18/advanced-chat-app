import { Request, Response, NextFunction, json } from "express";

function parseJson() {
  const jsonMiddlewareFn = json();
  return jsonMiddlewareFn;
}

export default parseJson;
