import AppError from './AppError';

export default {
  emailTaken: new AppError(
    403,
    '02-001',
    'Email already used by another user.',
  ),
  invalidUserId: new AppError(
    401,
    '02-002',
    'Only authenticated users can change their avatar.',
  ),
};
