import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authenticationConfig from '../../config/authentication';

import User from '../models/User';
import authenticationErrors from '../errors/authenticationErrors';

interface AuthenticateUserDTO {
  email: string;
  password: string;
}

interface ReturnDTO {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public static async execute({
    email,
    password,
  }: AuthenticateUserDTO): Promise<ReturnDTO> {
    const usersRepositoy = getRepository(User);

    const user = await usersRepositoy.findOne({
      where: { email },
    });

    if (!user) throw authenticationErrors.defaultError;

    const passwordMatches = await compare(password, user.password_hash);

    if (!passwordMatches) throw authenticationErrors.defaultError;

    const { secret, expiresIn } = authenticationConfig.jwt;

    const token = sign({ user }, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
