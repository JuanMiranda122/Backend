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
        unique: true,
        match: /^[^\s@]+@[^\s@]+.[^\s@]+$/
    },
    password: {
        type: String,
        // sirve para obligario
        required: true,
        // el match es para que consida con la comparacion que se necesite 
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        // cuando se pida el dato que no imprima la contraseña
        select: false 
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }, 
    Documento: Number,
    edad: Number,
    genero: String,
    discapacidad: Boolean

})

export const UserModel = mongoose.model('Usuarios', userSchema)

