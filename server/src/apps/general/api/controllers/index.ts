import { ApiError, AppConfigManager } from "../../../../utils";
import os from "node:os";

class GeneralController {
  constructor() {}

  getVersionInfo(): Promise<{ version: string }> {
    return new Promise((resolve, reject) => {
      const version = AppConfigManager.get("version");
      if (typeof version === "string")
        resolve({
          version,
        });
      reject(new ApiError(400, "Invalid version type"));
    });
  }

  getHealthInfo(): Promise<{ status: string; upTime: number }> {
    return new Promise((resolve) => {
      resolve({
        status: "OK",
        upTime: os.uptime(),
      });
    });
  }
}

export default GeneralController;
