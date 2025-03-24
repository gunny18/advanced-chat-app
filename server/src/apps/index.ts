import { IRequiredServers } from "../interfaces";
import RootApplication from "./general";

// inits all apps
function initApplications(servers: IRequiredServers) {
  const rootApplication = new RootApplication(servers);

  // define other apps and merge with root app

  rootApplication.init();
}

export default initApplications;
