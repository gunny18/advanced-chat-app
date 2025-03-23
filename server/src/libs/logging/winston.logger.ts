import winston from "winston";
import { IS_DEV_ENV } from "../../constants";

// Define security levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// to decide what logs to show, based on the operating env - prod or dev
const level = () => {
  return IS_DEV_ENV ? "debug" : "warn";
};

// Defining colors for each level
// Makes it more easy to identify logs!
const colors = {
  error: "red",
  warn: "yellow",
  info: "blue",
  http: "magenta",
  debug: "white",
};

// Link the colors to winston logger
winston.addColors(colors);

// Log format customization
const format = winston.format.combine(
  // Preferred timestapm format
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  // tell winston logs must be colored
  winston.format.colorize({ all: true }),
  // define format of message
  winston.format.printf(
    (info) => `[${info.timestamp} ${info.level}: ${info.message}]`
  )
);

// define the transports winston must use
const transports = [
  // console transport!
  new winston.transports.Console(),
  new winston.transports.File({ filename: "logs/error.log", level: "error" }),
  new winston.transports.File({ filename: "logs/info.log", level: "info" }),
  new winston.transports.File({ filename: "logs/http.log", level: "http" }),
];

// create the logger instance to be exported!
const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default logger;
