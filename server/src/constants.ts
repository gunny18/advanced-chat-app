import path from "node:path";

export const IS_DEV_ENV =
  (process.env.ENV || "developement") === "developement";

// Paths
export const PROJECT_CONFIG_PATH = path.join(PROJECT_ROOT_PATH, "config.json");
export const PROJECT_ENV_PATH = path.join(PROJECT_ROOT_PATH, "..", ".env");

// Database
export const ALLOWED_TYPEORM_DATABASES = ["postgres", "mysql"];
