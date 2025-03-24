import { IRequiredServers } from "../../interfaces";
import RootApi from "./api";
import express from "express";

class RootApplication {
  private api: RootApi;

  constructor(servers: IRequiredServers) {
    this.api = new RootApi(servers);
  }

  registerSubAppApi(obj: { path: string; router: express.Router }) {
    this.api.registerWithRootApi(obj.path, obj.router);
  }

  init() {
    // init after other apps api are merged with root api
    this.api.init();
  }
}

export default RootApplication;
