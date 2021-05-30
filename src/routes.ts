import { Router } from 'express';

import { IndexController } from './controllers/IndexController';
import { LoginController } from './controllers/LoginController';
import { RegisterController } from './controllers/RegisterController';

const router = Router();

const indexController = new IndexController();
const registerController = new RegisterController();
const loginController = new LoginController();

router.get('/login', loginController.create)
router.get('/register', registerController.create);
//router.get('/me', indexController.create);

export { router };
