import AppError from './AppError';

export default {
  defaultError: new AppError(
    401,
    '03-001',
    'Incorrect email/password combination.',
  ),
  JWTmissing: new AppError(401, '03-002', 'JWT token is missing.'),
  invalidJWT: new AppError(401, '03-003', 'Invalid JWT token.'),
};
