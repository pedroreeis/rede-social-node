import { Router } from 'express';

import { IndexController } from './controllers/IndexController';

import { CadastrarController } from './controllers/CadastrarController';
import { DeleteController } from './controllers/DeleteController';
import { EditarController } from './controllers/EditarController';
import { EditController } from './controllers/EditController';
import { GuardarController } from './controllers/GuardarController';
import { ShowController } from './controllers/ShowController';

const router = Router();

const indexController = new IndexController();

const cadastrarController = new CadastrarController();
const deleteController = new DeleteController();
const editarController = new EditarController();
const editController = new EditController();
const guardarController = new GuardarController();
const showController = new ShowController();

router.get('/', indexController.create);

router.get('/cadastrar', cadastrarController.create);
router.post('/guardar', guardarController.create);
router.get('/show', showController.create);
router.get('/del/:id', deleteController.create);
router.get('/editar/:id', editarController.create);
router.post('/edit', editController.create);



export { router };
