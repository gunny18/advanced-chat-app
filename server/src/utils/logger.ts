import { logger } from "../libs";

class Logger implements ILogger {
  private _logger: typeof logger;
  static _uniqueLogger: ILogger;

  private constructor() {
    this._logger = logger;
  }

  static getLogger() {
    if (!Logger._uniqueLogger) {
      Logger._uniqueLogger = new Logger();
    }
    return Logger._uniqueLogger;
  }

  info(message: string): void {
    this._logger.info(message);
  }

  warn(message: string): void {
    this._logger.warn(message);
  }

  debug(message: string): void {
    this._logger.debug(message);
  }

  error(message: string): void {
    this._logger.error(message);
  }
}

const AppLogger = Logger.getLogger();
export default AppLogger;
