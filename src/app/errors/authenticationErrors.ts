import ApplicationError from './ApplicationError';

export default {
  defaultError: new ApplicationError(
    401,
    '03-001',
    'Incorrect email/password combination.',
  ),
  JWTmissing: new ApplicationError(401, '03-002', 'JWT token is missing.'),
  invalidJWT: new ApplicationError(401, '03-003', 'Invalid JWT token.'),
};
