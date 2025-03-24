import express from "express";
import GeneralRouteActions from "./actions";
import { asyncHandler } from "../../../../utils";
import { IRootRouter } from "../../../../interfaces";

class RootRouter implements IRootRouter {
  private _router: express.Router;
  private routeActions: GeneralRouteActions;

  constructor() {
    this._router = express.Router();
    this.routeActions = new GeneralRouteActions();
  }

  private defineEndpoints() {
    // make sure the actions functions are always going to return a promisified response.
    this._router.get(
      "/version",
      asyncHandler(this.routeActions.checkVersion.bind(this.routeActions))
    );
    this._router.get(
      "/health",
      asyncHandler(this.routeActions.checkHealth.bind(this.routeActions))
    );
  }

  registerRouter(path: string, router: express.Router) {
    this._router.use(path, router);
  }

  initRouter() {
    this.defineEndpoints();
  }

  fetchRouter(): express.Router {
    return this._router;
  }
}

export default RootRouter;
