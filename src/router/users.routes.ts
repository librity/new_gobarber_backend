import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import UsersController from '../app/controllers/UsersController';

import ensureAuthenticated from '../app/middlewares/ensureAuthenticated';

const usersRoutes = Router();
const upload = multer(uploadConfig);

usersRoutes.post('/', UsersController.create);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  UsersController.updateAvatar,
);

export default usersRoutes;
