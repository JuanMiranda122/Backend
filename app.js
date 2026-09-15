import express from 'express';
import productsRouter from './src/routes/routes.productos.js';
import { conecetarDB } from './src/config/db.config.js';


const app = express();


conecetarDB()

app.use(express.json());

app.use(productsRouter);


app.listen(3000, ()=>{
   console.log("El puerto esta prendido");
   
})