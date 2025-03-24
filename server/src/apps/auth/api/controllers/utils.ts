import bcrypt from "bcryptjs";
import { PASSWORD_HASH_VALUE, RANDOM_BOY_AVATAR_URL, RANDOM_GIRL_AVATAR_URL } from "../../constants";

export async function generateHashedPasswod(val: string) {
  return await bcrypt.hash(val, PASSWORD_HASH_VALUE);
}

export async function getGenderBasedRandomProfileUrlBasedOnUsername(
  gender: string,
  username: string
) {
  let profilePicUrl = "";
  switch (gender) {
    case "male":
      profilePicUrl = RANDOM_BOY_AVATAR_URL + "?username=" + username;
      break;
    case "female":
      profilePicUrl = RANDOM_GIRL_AVATAR_URL + "?username=" + username;
      break;
    default:
      break;
  }
  return profilePicUrl;
}
