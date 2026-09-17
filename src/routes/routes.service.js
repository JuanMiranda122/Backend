import express from 'express';
import { servicedelte, serviceget, servicepatch, servicepost } from '../controllers/controllers.service.js';


const serviceRouter = express.Router();

serviceRouter.get('/servicios', serviceget);
serviceRouter.post('/servicios', servicepost);
serviceRouter.patch('/servicios/:id', servicepatch)
serviceRouter.delete('/servicios/:id', servicedelte)

export default serviceRouter;
