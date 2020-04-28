import { Router } from 'express';

import usersRoutes from './users.routes';
import sessionsRoutes from './sessions.routes';
import appointmentsRoutes from './appointments.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/sessions', sessionsRoutes);
router.use('/appointments', appointmentsRoutes);

export default router;
