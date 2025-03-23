import path from "node:path";
import { PROJECT_CONFIG_PATH } from "../../constants";

import dotenv from "dotenv";
dotenv.config({ path: path.join(globalThis.PROJECT_ROOT_PATH, ".env") });

import configManager from "nconf";

configManager.env({
  lowercase: true,
  parseValues: true,
});

configManager.file({ file: PROJECT_CONFIG_PATH });

export default configManager;
