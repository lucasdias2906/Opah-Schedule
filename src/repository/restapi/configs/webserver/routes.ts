import { Request, Response, Router } from 'express';
import DevController from '../../controllers/DevController';
import AdminTemp from '../../controllers/AdminTime'

const routes = Router();

let contador = 1

routes.get('/', (req: Request, res: Response) => {
    console.log("ALGUMAS COISA", contador++)
    return res.send({ status: 'OK' })
});

routes.post("/", AdminTemp.adminJobTime)

routes.get('/users', DevController.update);

export default routes;
