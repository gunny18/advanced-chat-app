import "reflect-metadata";
import { DataSource } from "typeorm";
import ORM_CONFIG from "./config";
import { AppLogger } from "../utils";

class DatabaseConnection {
  private _AppDataSource: DataSource;
  private static uniqueInstance: DatabaseConnection;

  private constructor() {}

  static getConnectionInstance() {
    if (!DatabaseConnection.uniqueInstance) {
      DatabaseConnection.uniqueInstance = new DatabaseConnection();
    }
    return DatabaseConnection.uniqueInstance;
  }

  async initConnection() {
    if (!this._AppDataSource) {
      this._AppDataSource = new DataSource(ORM_CONFIG);
      await this._AppDataSource.initialize();
      AppLogger.info("Connected to database");
    }
  }

  get AppDataSource() {
    return this._AppDataSource;
  }
}

// export the singleton instance. Let client initiate the connection when needed
const DatabaseConnectionInstance = DatabaseConnection.getConnectionInstance();
export default DatabaseConnectionInstance;
