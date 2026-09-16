import mongoose from 'mongoose';

const productsSchema = mongoose.Schema({

     name: String,
     clan: String,
     chakra: Number,
     naturaleza_de_chakra: String,
     chinchuriki: Boolean 
})


export const ProductModel = mongoose.model('Productos', productsSchema)

