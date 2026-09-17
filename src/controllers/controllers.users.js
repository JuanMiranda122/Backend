import { UserModel } from "../models/models.users.js";

export async function usersget(req, res){
    try {
        const usuario = await UserModel.find();

        if( usuario.length === 0 ){
            res.json({
            ok: false,
            msg: "Usuario no Obtenido",
        })}else{
            res.json({
            ok: true,
            msg: "Usuario Obtenido",
            data: usuario 
        })

        }

       
    } catch (error) {

            res.json({
            ok: false,
            msg: error
        })
        
    }

}


export async function userspost(req, res){
    try {
        const data = req.body;

        const user = await UserModel.create(data);

        if(data.password.length <= 8){

            res.json({
            ok: false,
            msg: "ingrese una contraseña que supere los 8 caracteres"
        })
        }else{

            res.json({
            ok: true,
            msg: "Usuario Creado",
            data: user
        })

        }
    } catch (error) {

             res.json({
            ok: false,
            msg: error.message
        })
        
        
    }
    
}

export async function usersdelte(req, res){
    try {
        res.json({
            ok: true,
            msg: "Usuario eliminado",
            data: "User"
        })
    } catch (error) {
               
        res.json({
            ok: false,
            msg: error.message
        })
        
    }
}

export async function userspatch(req, res){
    try {

        res.json({
            ok: true,
            msg: "Usuario actualizar",
            data: "User"
        })
        
    } catch (error) {
         res.json({
            ok: false,
            msg: error.message
        })
        
    }
}