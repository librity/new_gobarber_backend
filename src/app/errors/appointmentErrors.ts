import AppError from './AppError';

export default {
  dateTaken: new AppError(
    403,
    '01-001',
    'Appointment on the same date already exists.',
  ),
};
