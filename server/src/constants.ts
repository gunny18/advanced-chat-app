import path from "node:path";

export const IS_DEV_ENV =
  (process.env.SERVER_ENV || "developement") === "developement";

export const PROJECT_SRC_PATH = path.join(globalThis.PROJECT_ROOT_PATH, "src");
export const PROJECT_CONFIG_PATH = path.join(PROJECT_SRC_PATH, "config.json");
