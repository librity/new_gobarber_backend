import ApplicationError from './ApplicationError';

export default {
  dateTaken: new ApplicationError(
    403,
    '01-001',
    'Appointment on the same date already exists.',
  ),
};
