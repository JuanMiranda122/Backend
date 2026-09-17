import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({

    nombre_empresa: String,
    tipo_empresa: String,
    solicitud: String,
    presupuesto: Number,
    servicio_requerido: String,
    correo: String
})

export const serviceModel = mongoose.model('Servicios', serviceSchema)




