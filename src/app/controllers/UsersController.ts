import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

class UsersController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const newUser = await CreateUserService.execute({
      name,
      email,
      password,
    });

    delete newUser.password_hash;

    return res.json(newUser);
  }

  static async updateAvatar(req: Request, res: Response): Promise<Response> {
    const updatedUser = await UpdateUserAvatarService.execute({
      user_id: req.user.id,
      avatarFileName: req.file.filename,
    });

    delete updatedUser.password_hash;

    return res.json(updatedUser);
  }
}

export default UsersController;
