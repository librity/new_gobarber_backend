import { Router } from 'express';

import SessionsController from '../app/controllers/SessionsController';

const sessionsRoutes = Router();

sessionsRoutes.post('/', SessionsController.create);

export default sessionsRoutes;
