import CommonDatabaseOperations from "../../../../database/commonOperations";
import { User } from "../entities";

// @ts-ignore
class UserDatabaseOperations extends CommonDatabaseOperations<User> {}

export default UserDatabaseOperations;
