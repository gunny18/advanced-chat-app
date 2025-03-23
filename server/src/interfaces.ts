import { Server } from "socket.io";

export interface ILogger {
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}

export interface IApiResponse {
  statusCode: number;
  data: Record<string, unknown> | null;
  message: string;
}

export interface IConfigManager {
  get(key: string): unknown | undefined;
}

export interface IRequiredServers {
  httpServer: Express.Application;
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
