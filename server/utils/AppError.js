class AppError extends Error {
  constructor(status, message) {
    super(message);
    this.statusCode = status;
    this.status = `${status}`.startsWith("4") ? "fail" : "error";
  }
}

module.exports = AppError;
