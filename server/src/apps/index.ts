import { ConnectionManager } from "../database";
import { IRequiredServers } from "../interfaces";
import AuthApplication from "./auth";
import RootApplication from "./root";

// inits all apps
async function initApplications(servers: IRequiredServers) {
  const rootApplication = new RootApplication(servers);

  const authApplication = new AuthApplication(servers);
  rootApplication.registerSubAppApi(authApplication.init());

  // define other apps and merge with root app
  rootApplication.init();

  // start DB connections, once all routes are setup
  await ConnectionManager.initDatabaseConnection();
}

export default initApplications;
