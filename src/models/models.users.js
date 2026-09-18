import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name: {
        type: String, 
        required: true,
        minLength: 3
    },
    apellido: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    role: String, 
    Documento: Number,
    edad: Number,
    genero: String,
    discapacidad: Boolean

})

export const UserModel = mongoose.model('Usuarios', userSchema)

