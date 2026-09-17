import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name: String,
    apellido: String,
    email: String,
    password: String, 
    Documento: Number,
    edad: Number,
    genero: String,
    discapacidad: Boolean

})

export const UserModel = mongoose.model('Usuarios', userSchema)