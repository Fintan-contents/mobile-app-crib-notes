function debug(message?: any, ...optionalParams: any[]): void {
  const messages = message ? [message, ...optionalParams] : [];
  console.log(...messages);
}

const Logger = {
  debug,
};

export default Logger;
