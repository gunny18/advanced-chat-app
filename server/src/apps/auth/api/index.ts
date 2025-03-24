import { IRequiredServers, IRouter } from "../../../interfaces";
import AuthRouter from "./routes";

export class AuthApi {
  private servers: IRequiredServers;
  private router: IRouter;

  constructor(servers: IRequiredServers) {
    this.servers = servers;
    this.router = new AuthRouter();
  }

  init() {
    const router = this.router;
    router.initRouter();

    return { path: "/auth", router: router.fetchRouter() };
  }
}

export default AuthApi;
