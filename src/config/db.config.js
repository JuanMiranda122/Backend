import mongoose from 'mongoose';

const urlDB = 'mongodb://localhost:27017/tienda'

export async function conectar(){
    try {
        await mongoose.connect(urlDB)
        console.log('Base de datos conectada')
    } catch (error) {
        console.log('Error fallido')
        console.log(error)
    }
}