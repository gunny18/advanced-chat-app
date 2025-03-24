import express from "express";
import { asyncHandler } from "../../../../utils";
import { IRouter } from "../../../../interfaces";
import AuthRouterActions from "./actions";
import * as validators from "../validators";
import { validate } from "../../../root/api/middlewares";

class AuthRouter implements IRouter {
  private _router: express.Router;
  private routeActions: AuthRouterActions;

  constructor() {
    this._router = express.Router();
    this.routeActions = new AuthRouterActions();
  }

  private defineEndpoints() {
    // make sure the actions functions are always going to return a promisified response.
    // binding is very important for funcitonality with express routers, and class methods! why? GOOGLE IT!!!
    this._router.post(
      "/signup",
      validators.userSignUp(),
      validate,
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
