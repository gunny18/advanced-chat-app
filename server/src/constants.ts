import path from "node:path";

export const IS_DEV_ENV =
  (process.env.SERVER_ENV || "developement") === "developement";

export const PROJECT_CONFIG_PATH = path.join(PROJECT_ROOT_PATH, "config.json");
export const PROJECT_ENV_PATH = path.join(PROJECT_ROOT_PATH, "..", ".env");
