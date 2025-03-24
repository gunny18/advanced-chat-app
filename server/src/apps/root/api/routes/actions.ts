import { NextFunction, Request, Response } from "express";
import GeneralController from "../controllers";
import { ApiResponse, AppLogger } from "../../../../utils";

class GeneralRouteActions {
  private generalController: GeneralController;
  constructor() {
    this.generalController = new GeneralController();
  }

  async checkVersion(req: Request, res: Response, next: NextFunction) {
    const version = await this.generalController.getVersionInfo();
    res.status(200).json(new ApiResponse(200, version));
    return;
  }

  async checkHealth(req: Request, res: Response) {
    const healthInfo = await this.generalController.getHealthInfo();
    res.status(200).json(new ApiResponse(200, healthInfo));
  }
}

export default GeneralRouteActions;
