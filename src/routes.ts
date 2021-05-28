import { Router } from 'express';
import { IndexController } from './controllers/IndexController';

import { RegisterController } from './controllers/RegisterController';

const router = Router();

const indexController = new IndexController();

const registerController = new RegisterController();


router.get('/', registerController.create);

router.get('/index', indexController.create);

export { router };
