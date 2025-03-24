import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../../../../utils";
import AuthController from "../controllers";

class AuthRouterActions {
  private authController: AuthController;
  constructor() {
    this.authController = new AuthController();
  }

  async signUp(req: Request, res: Response, next: NextFunction) {
    const version = await this.authController.signUp();
    res.status(200).json(new ApiResponse(200, version));
    return;
  }

  async login(req: Request, res: Response) {
    const healthInfo = await this.authController.login();
    res.status(200).json(new ApiResponse(200, healthInfo));
  }
}

export default AuthRouterActions;
