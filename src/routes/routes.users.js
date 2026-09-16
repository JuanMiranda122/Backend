import express from 'express';
import { usersdelte, usersget, userspatch, userspost } from '../controllers/controllers.users.js';


const usersRouter = express.Router();

usersRouter.get('/Usuarios', usersget)
usersRouter.post('/Usuarios', userspost)
usersRouter.delete('/Usuarios', usersdelte)
usersRouter.patch('/Usuarios', userspatch)


export default usersRouter; 

