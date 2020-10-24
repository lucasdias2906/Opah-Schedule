import { Request, Response, Router } from 'express';
import DevController from '../../controllers/DevController';

const routes = Router();

routes.get('/', (req: Request, res: Response) =>

    res.send({ status: 'OK' })
);

routes.get('/users', DevController.update);

export default routes;
