import { Router } from 'express';

import AppointmentsController from '../app/controllers/AppointmentsController';

import ensureAuthenticated from '../app/middlewares/ensureAuthenticated';

const appointmentsRoutes = Router();

appointmentsRoutes.use(ensureAuthenticated);
appointmentsRoutes.get('/', AppointmentsController.index);
appointmentsRoutes.post('/', AppointmentsController.create);

export default appointmentsRoutes;
