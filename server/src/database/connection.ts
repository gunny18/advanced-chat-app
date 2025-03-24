import "reflect-metadata";
import { DataSource } from "typeorm";
import ORM_CONFIG from "./config";
import { AppLogger } from "../utils";

class ConnectionManager {
  static AppDataSource: DataSource;

  private constructor() {}

  static async initDatabaseConnection() {
    if (!ConnectionManager.AppDataSource) {
      ConnectionManager.AppDataSource = new DataSource(ORM_CONFIG);
      await ConnectionManager.AppDataSource.initialize();
      AppLogger.info("Connected to database");
    }
  }
}

export default ConnectionManager;
