import { IRequiredServers } from "../../interfaces";
import AuthApi from "./api";

class AuthApplication {
  private api: AuthApi;

  constructor(servers: IRequiredServers) {
    this.api = new AuthApi(servers);
  }

  init() {
    // init after other apps api are merged with root api
    return this.api.init();
  }
}

export default AuthApplication;
