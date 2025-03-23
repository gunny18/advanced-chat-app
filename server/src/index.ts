// IMPORTANT: setup the global project root path first.
declare global {
  var PROJECT_ROOT_PATH: string;
}
globalThis.PROJECT_ROOT_PATH = __dirname;

// IMPORTANT: Import order of below manager is vital.
import { AppConfigManager } from "./utils";

// other imports
