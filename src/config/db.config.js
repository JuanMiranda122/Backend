import mongoose from 'mongoose';


const urlDB = 'mongodb://localhost:27017/tienda'

export async function conecetarDB(){
    try {
        await mongoose.connect(urlDB);
        console.log('Conexion Exitosa')
    } catch (error) {
        console.log("Error al conectar la base de datos")
        console.log(error);
    }
}