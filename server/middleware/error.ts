import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error ";
  if ((err.name = "CastError")) {
    const message = `Resource not found`;
  }
  if ((err.code = 11000)) {
    const message = `Duplicate keys found`;
    err = new ErrorHandler(message, 400);
  }
  if ((err.name = "`JsonWebTokenError`")) {
    const message = `token error`;
    err = new ErrorHandler(message, 400);
  }
  if ((err.name = "TokenExpiredError")) {
    const message = `token expired`;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
