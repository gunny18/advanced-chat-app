import { IRequiredServers } from "../../interfaces";
import RootApi from "./api";

class RootApplication {
  private api: RootApi;
  constructor(servers: IRequiredServers) {
    this.api = new RootApi(servers);
  }

  init() {
    // init after other apps api are merged with root api
    this.api.init();
  }
}

export default RootApplication;
