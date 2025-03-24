import { User } from "../apps/auth/database/entities";
import { UserDatabaseOperations } from "../apps/auth/database/operations";
import { IDatabaseManager } from "../interfaces";
import ConnectionManager from "./connection";

interface IDatabaseOperations {
  user: UserDatabaseOperations;
}

class DatabaseManager implements IDatabaseManager {
  // TODO: make it a getter. As of now public accessible
  static uniqueInstance: DatabaseManager;
  static operations: IDatabaseOperations;

  private constructor() {}

  async init(): Promise<void> {
    if (!DatabaseManager.uniqueInstance) {
      DatabaseManager.uniqueInstance = new DatabaseManager();
    }
    // start connection
    await ConnectionManager.initDatabaseConnection();

    // attach operations
    DatabaseManager.operations.user = new UserDatabaseOperations(User);
  }
}

export default DatabaseManager;
