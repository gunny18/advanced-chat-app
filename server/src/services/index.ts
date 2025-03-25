import DatabaseConnectionInstance from "../database/connection";
import DatabaseOperations from "../database/operations";

class PersistantServices {
  private static uniqueInstance: PersistantServices;

  private _databaseOperations: DatabaseOperations;

  private constructor() {}

  static getInstance() {
    if (!PersistantServices.uniqueInstance) {
      PersistantServices.uniqueInstance = new PersistantServices();
    }
    return PersistantServices.uniqueInstance;
  }

  private async initDatabase() {
    await DatabaseConnectionInstance.initConnection();
    this._databaseOperations = new DatabaseOperations(
      DatabaseConnectionInstance.AppDataSource
    );
  }

  async init() {
    await this.initDatabase();
  }

  get databaseOperations() {
    return this._databaseOperations;
  }
}

const PersistantServicesInstance = PersistantServices.getInstance();
export default PersistantServicesInstance;
