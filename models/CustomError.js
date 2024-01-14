export class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = this.constructor.name;
    this.timeStamp = new Date().toISOString();
    this.errorCode = errorCode;
  }
}
