import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authenticationConfig from '../../config/authentication';
import authenticationErrors from '../errors/authenticationErrors';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authenticationHeader = req.headers.authorization;

  if (!authenticationHeader) throw authenticationErrors.JWTmissing;

  const [, token] = authenticationHeader.split(' ');

  const { secret } = authenticationConfig.jwt;

  try {
    const decodedPayload = verify(token, secret);

    const { sub } = decodedPayload as TokenPayload;

    req.user = { id: sub };

    return next();
  } catch {
    throw authenticationErrors.invalidJWT;
  }
};

export default ensureAuthenticated;
