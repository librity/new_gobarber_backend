import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

class UsersController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;

      const newUser = await CreateUserService.execute({
        name,
        email,
        password,
      });

      delete newUser.password_hash;

      return res.json(newUser);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  static async updateAvatar(req: Request, res: Response): Promise<Response> {
    try {
      return res.json({});
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default UsersController;
