import CommonDatabaseOperations from "../../../../database/operations";
import { User } from "../entities";

// @ts-ignore
class UserDatabaseOperations extends CommonDatabaseOperations<User> {}

export default UserDatabaseOperations;
