import { Response, Router } from 'express';
import DevController from '../../controllers/DevController';
import AdminTemp from '../../controllers/AdminTime'

const routes = Router();



// routes.get('/', (req: Request, res: Response) => {
//     console.log("CHMAI")

//     return res.send({ status: 'OK' })
// });

routes.get("/:tempSchedule", AdminTemp.adminTime, (res: Response) => {

    return res.json({ message: "OK" })
})

routes.post('/users', DevController.update);

export default routes;
