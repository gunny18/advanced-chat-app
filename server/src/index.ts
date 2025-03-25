// IMPORTANT: setup the global project root path first.
declare global {
  var PROJECT_ROOT_PATH: string;
}
globalThis.PROJECT_ROOT_PATH = __dirname;

// IMPORTANT: Import order of below manager is vital.
import { AppConfigManager, AppLogger } from "./utils";

// other imports
import initApplications from "./apps";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import PersistantServicesInstance from "./services";

// server inits
async function initServer() {
  const httpServer = express();
  const server = createServer(httpServer);

  const socketServer = new Server(server, {
    cors: {},
  });

  await PersistantServicesInstance.init();

  await initApplications({ httpServer, socketServer });

  const port = AppConfigManager.get("port");

  httpServer.listen(port, () => {
    AppLogger.info(`Started server on port ${port}`);
  });
}

initServer();
