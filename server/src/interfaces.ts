interface ILogger {
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}

export interface IApiResponse {
  statusCode: number;
  data: Record<string, unknown> | null;
  message: string;
}
