import express from "express";
import { asyncHandler } from "../../../../utils";
import { IRouter } from "../../../../interfaces";
import AuthRouterActions from "./actions";

class AuthRouter implements IRouter {
  private _router: express.Router;
  private routeActions: AuthRouterActions;

  constructor() {
    this._router = express.Router();
    this.routeActions = new AuthRouterActions();
  }

  private defineEndpoints() {
    // make sure the actions functions are always going to return a promisified response.
    this._router.post(
      "/signup",
      asyncHandler(this.routeActions.signUp.bind(this.routeActions))
    );
    this._router.post(
      "/login",
      asyncHandler(this.routeActions.login.bind(this.routeActions))
    );
  }

  initRouter() {
    this.defineEndpoints();
  }

  fetchRouter(): express.Router {
    return this._router;
  }
}

export default AuthRouter;
