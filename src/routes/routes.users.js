import express from 'express';
import { usersdelte, usersget, userspatch, userspost } from '../controllers/controllers.users.js';


const usersRouter = express.Router();

usersRouter.get('/Usuarios', usersget)
usersRouter.post('/Usuarios', userspost)
usersRouter.delete('/Usuarios/:id', usersdelte)
usersRouter.patch('/Usuarios/:id', userspatch)


export default usersRouter; 

