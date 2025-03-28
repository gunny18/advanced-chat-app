import PersistantServicesInstance from "../../../../services";
import { UserDatabaseOperations } from "../../database";
import {
  generateHashedPasswod,
  getGenderBasedRandomProfileUrlBasedOnUsername,
} from "./utils";

class AuthController {
  private userDatabaseOperations: UserDatabaseOperations;

  constructor() {
    this.userDatabaseOperations =
      PersistantServicesInstance.databaseOperations.user;
  }

  async signUp(signUpData: Record<string, any>) {
    signUpData.password = await generateHashedPasswod(signUpData.password);
    signUpData.profilePic = getGenderBasedRandomProfileUrlBasedOnUsername(
      signUpData.gender,
      signUpData.username
    );
    const createdUser = await this.userDatabaseOperations.create(signUpData);
    return createdUser;
  }

  login() {
    return new Promise((resolve, reject) => {
      resolve("Log in");
    });
  }
  
  logout() {}
}

export default AuthController;
