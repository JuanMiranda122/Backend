import express from 'express';
import productsRouter from './src/routes/routes.productos.js';
import {  conectar } from './src/config/db.config.js';
import usersRouter from './src/routes/routes.users.js';
import serviceRouter from './src/routes/routes.service.js';


const app = express();


conectar()

app.use(express.json());

app.use(productsRouter);
app.use(usersRouter);
app.use(serviceRouter);


app.listen(3000, ()=>{
   console.log("El puerto esta prendido");
   
})