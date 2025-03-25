import { DataSource } from "typeorm";
import { User, UserDatabaseOperations } from "../apps/auth/database";

// A class providing access to all the entities database operations.
// Clients must access through this and not directly!
class DatabaseOperations {
  private _user: UserDatabaseOperations;

  constructor(datasource: DataSource) {
    this._user = new UserDatabaseOperations(User, datasource);
  }

  get user() {
    return this._user;
  }
}

export default DatabaseOperations;
