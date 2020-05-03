import { Request, Response, NextFunction } from 'express';
import ApplicationError from '../errors/ApplicationError';

export default (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ApplicationError) {
    return res.status(err.httpCode).json({
      status: 'error',
      internalCode: err.internalCode,
      message: err.description,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
};
