import { Router } from "express";
import { IRequiredServers, IRootRouter } from "../../../interfaces";
import { ApiError, AppConfigManager } from "../../../utils";
import {
  errorHandler,
  parseCookies,
  parseCors,
  parseJson,
} from "./middlewares";
import RootRouter from "./routes";

export class RootApi {
  private servers: IRequiredServers;
  private rootRouter: IRootRouter;
  private registeredRouters: { path: string; router: Router }[];

  constructor(servers: IRequiredServers) {
    this.servers = servers;
    this.rootRouter = new RootRouter();
    this.registeredRouters = [];
  }

  // must be called befire init, incase
  registerWithRootApi(path: string, router: Router) {
    this.registeredRouters.push({ path, router });
  }

  init() {
    const app = this.servers.httpServer;
    const rootRouter = this.rootRouter;

    //middlewares
    app.use(parseJson());
    app.use(parseCors());
    app.use(parseCookies());

    // fetch version and app name
    const version = AppConfigManager.get("version");
    if (typeof version !== "string")
      throw new ApiError(500, "Invalid version type");

    const appName = AppConfigManager.get("name");
    if (typeof appName !== "string")
      throw new ApiError(500, "Invalid app name type");

    // define general routes
    rootRouter.initRouter();
    // define merged Api routes with root API
    this.registeredRouters.forEach((regRoute) => {
      this.rootRouter.registerRouter(regRoute.path, regRoute.router);
    });

    // app routes
    app.use(`/${appName}/api/v${version}`, rootRouter.fetchRouter());

    // error middleware
    app.use(errorHandler);
  }
}

export default RootApi;
