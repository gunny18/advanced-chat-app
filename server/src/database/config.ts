import { join } from "node:path";
import { AppConfigManager } from "../utils";
import {
  assertBoolean,
  assertNumber,
  assertString,
  assertValidTypeormDatabaseTypes,
} from "../utils/typeChecks";

const entitiesPath = join(
  globalThis.PROJECT_ROOT_PATH,
  "apps",
  "*",
  "database",
  "entities",
  "*.{ts,js}"
);

const ORM_CONFIG = {
  type: assertValidTypeormDatabaseTypes(AppConfigManager.get("database:type")),
  host: assertString(AppConfigManager.get("database:host")),
  port: assertNumber(AppConfigManager.get("database:port")),
  username: assertString(AppConfigManager.get("database:username")),
  password: assertString(AppConfigManager.get("database:password")),
  database: assertString(AppConfigManager.get("database:name")),
  synchronize: assertBoolean(AppConfigManager.get("database:synchronize")),
  logging: assertBoolean(AppConfigManager.get("database:logging")),
  entities: [entitiesPath],
};

export default ORM_CONFIG;
