import { IConfigManager } from "../interfaces";
import { configManager } from "../libs";

class ConfigManager implements IConfigManager {
  private _configManager: typeof configManager;
  private static uniqueInstance: IConfigManager;

  private constructor() {
    this._configManager = configManager;
  }

  static getConfigManager() {
    if (!ConfigManager.uniqueInstance) {
      ConfigManager.uniqueInstance = new ConfigManager();
    }
    return ConfigManager.uniqueInstance;
  }

  get(key: string): unknown | undefined {
    return this._configManager.get(key);
  }
}

const AppConfigManager = ConfigManager.getConfigManager();
export default AppConfigManager;
