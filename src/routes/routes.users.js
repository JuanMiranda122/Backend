import express from 'express';
import { usersget, userspost } from '../controllers/controllers.users.js';


const usersRouter = express.Router();

usersRouter.get('/Usuarios', usersget)

usersRouter.post('/Usuarios', userspost)


export default usersRouter; 

