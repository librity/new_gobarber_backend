import { Router } from 'express';

import AppointmentsController from '../app/controllers/AppointmentsController';

const appointmentsRoutes = Router();

appointmentsRoutes.get('/', AppointmentsController.index);
appointmentsRoutes.post('/', AppointmentsController.create);

export default appointmentsRoutes;
