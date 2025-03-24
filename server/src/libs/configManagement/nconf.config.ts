import { PROJECT_CONFIG_PATH, PROJECT_ENV_PATH } from "../../constants";
import configManager from "nconf";

import dotenv from "dotenv";
dotenv.config({ path: PROJECT_ENV_PATH });

configManager
  .env({
    lowerCase: true,
    parseValues: true,
  })
  .file({ file: PROJECT_CONFIG_PATH });

export default configManager;
