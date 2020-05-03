import ApplicationError from './ApplicationError';

export default {
  emailTaken: new ApplicationError(
    403,
    '02-001',
    'Email already used by another user.',
  ),
  invalidUserId: new ApplicationError(
    401,
    '02-002',
    'Only authenticated users can change their avatar.',
  ),
};
