import { Request, Response } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionsController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const { user, token } = await AuthenticateUserService.execute({
      email,
      password,
    });

    delete user.password_hash;

    return res.json({ user, token });
  }
}

export default SessionsController;
