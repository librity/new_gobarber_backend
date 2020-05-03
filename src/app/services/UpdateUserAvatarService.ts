import { getRepository } from 'typeorm';
import { join } from 'path';
import fs from 'fs';

import uploadConfig from '../../config/upload';
import User from '../models/User';
import userErrors from '../errors/userErrors';

interface UpdateUserAvatarDTO {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public static async execute({
    user_id,
    avatarFileName,
  }: UpdateUserAvatarDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) throw userErrors.invalidUserId;

    if (user.avatar) {
      const userAvatarFilePath = join(uploadConfig.directory, user.avatar);

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
      if (userAvatarFileExists) await fs.promises.unlink(userAvatarFilePath);
    }

    user.avatar = avatarFileName;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
