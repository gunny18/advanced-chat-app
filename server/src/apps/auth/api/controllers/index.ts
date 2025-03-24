import {
  AVAILABLE_GENDERS,
  PASSWORD_HASH_VALUE,
  RANDOM_BOY_AVATAR_URL,
  RANDOM_GIRL_AVATAR_URL,
} from "../../constants";
import { User } from "../../database/entities";
import { UserDatabaseOperations } from "../../database/operations";
import bcrypt from "bcryptjs";

class AuthController {
  private userDatabaseOperations: UserDatabaseOperations;

  constructor() {
    this.userDatabaseOperations = new UserDatabaseOperations(User);
  }

  private async generateHashedPasswod(val: string) {
    return await bcrypt.hash(val, PASSWORD_HASH_VALUE);
  }

  private getGenderBasedRandomProfileUrlBasedOnUsername(
    gender: string,
    username: string
  ) {
    let profilePicUrl = "";
    switch (gender) {
      case "male":
        profilePicUrl = RANDOM_BOY_AVATAR_URL + "?username=" + username;
        break;
      case "female":
        profilePicUrl = RANDOM_BOY_AVATAR_URL + "?username=" + username;
        break;
      default:
        break;
    }
    return profilePicUrl;
  }

  async signUp(signUpData: Record<string, any>) {
    signUpData.password = await this.generateHashedPasswod(signUpData.password);
    signUpData.profilePic = this.getGenderBasedRandomProfileUrlBasedOnUsername(
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
