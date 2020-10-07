import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    // const usersRepository = new UsersRepository();
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    /**
     * Nao mostrar a senha no retorno da criação do usuário
     * delete user.password;
     */
    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    try {
      const userUpdateAvatar = container.resolve(UpdateUserAvatarService);

      const user = await userUpdateAvatar.execute({
        user_id: request.user.id,
        avatar_filename: request.file.filename,
      });

      delete user.password;

      return response.json({ user });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
);

export default usersRouter;
