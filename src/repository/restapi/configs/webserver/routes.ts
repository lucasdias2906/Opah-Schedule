import { Router } from 'express';
import UserController from '../../controllers/AddressCompanyController';

const routes = Router();

routes.post('/users', UserController.update);

export default routes;
