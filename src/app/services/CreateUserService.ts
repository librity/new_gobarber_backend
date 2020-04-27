import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import userErrors from '../errors/userErrors';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public static async execute({
    name,
    email,
    password,
  }: CreateUserDTO): Promise<User> {
    const usersRepositoy = getRepository(User);

    const emailAlreadyTaken = await usersRepositoy.findOne({
      where: { email },
    });

    if (emailAlreadyTaken) throw userErrors.emailTaken;

    const password_hash = await hash(password, 8);

    const user = usersRepositoy.create({
      name,
      email,
      password_hash,
    });

    await usersRepositoy.save(user);

    return user;
  }
}

export default CreateUserService;
