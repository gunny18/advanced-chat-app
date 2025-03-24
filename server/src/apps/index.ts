import { DatabaseManager } from "../database";
import { IRequiredServers } from "../interfaces";
import AuthApplication from "./auth";
import RootApplication from "./root";

// inits all apps
async function initApplications(servers: IRequiredServers) {
  // define the root application
  const rootApplication = new RootApplication(servers);

  // define other apps and merge with root app
  const authApplication = new AuthApplication(servers);
  rootApplication.registerSubAppApi(authApplication.init());

  // initialize the root app after the other apps are merged with root app
  rootApplication.init();

  // TODO: can be moved else where
  // start services like DB, AWS, etc and other external, persitant services if any!
  const dbManager = new DatabaseManager();
  await dbManager.init();
}

export default initApplications;
