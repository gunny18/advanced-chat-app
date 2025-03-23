import morgan from "morgan";
import logger from "./winston.logger";
import { IS_DEV_ENV } from "../../constants";

const stream = {
  write: (message: string) => logger.http(message.trim()),
};

// to ensure morgan skips logs if in prod env!
const skip = () => {
  return !IS_DEV_ENV;
};

const morganMiddleware = morgan("combined", { stream, skip });

export default morganMiddleware;
