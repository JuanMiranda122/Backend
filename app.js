import express from 'express';
import productsRouter from './src/routes/routes.productos.js';


const app = express();

app.use(express.json());

app.use(productsRouter);

app.listen(3000, ()=>{
   console.log("El puerto esta prendido");
   
})