import { Router } from 'express';

import AppointmentsController from '../app/controllers/AppointmentsController';

const appointmentsRoutes = Router();

appointmentsRoutes.post('/', AppointmentsController.create);

export default appointmentsRoutes;
