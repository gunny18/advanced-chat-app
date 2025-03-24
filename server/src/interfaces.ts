import { Server } from "socket.io";
import { Application, Router } from "express";

export interface ILogger {
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}

export interface IApiResponse {
  statusCode: number;
  data: Record<string, unknown> | void | undefined | null;
  message: string;
}

export interface IConfigManager {
  get(key: string): unknown | undefined;
}

export interface IRequiredServers {
  httpServer: Application;
  socketServer: Server;
}

export interface IServerApplications {
  rootApplication: IApplication;
  serviceApplications: IApplication[];
}

export interface IApi {}

export interface IApplication {
  api: IApi;
  init(servers: IRequiredServers): Promise<void>;
}

export interface IRouter {
  initRouter(): void;
  fetchRouter(): Router;
}

export interface IRootRouter extends IRouter {
  registerRouter(path: string, router: Router): void;
}
