import { PROJECT_CONFIG_PATH, PROJECT_ENV_PATH } from "../../constants";
import configManager from "nconf";

import dotenv from "dotenv";
dotenv.config({ path: PROJECT_ENV_PATH });

configManager.env({
  separator: "_",
  lowerCase: true,
  parseValues: true,
});


configManager.file({ file: PROJECT_CONFIG_PATH });


export default configManager;
