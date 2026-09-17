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
            msg: error.message
        })
        
    }

}
     
export async function userspost(req, res){
    try {
        const data = req.body;


        if(data.password.length <= 8){

            res.json({
            ok: false,
            msg: "ingrese una contraseña que supere los 8 caracteres"
        })
        }else{

            const user = await UserModel.create(data);

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

        const id = req.params.id

        const user = await UserModel.findByIdAndDelete(id);


        res.json({
            ok: true,
            msg: "Usuario eliminado",
            data: user
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

        const id = req.params.id;
        const data = req.body;

        const user = await UserModel.findByIdAndUpdate(id, data, { new: true});

        res.json({
            ok: true,
            msg: "Usuario actualizar",
            data: user
        })
        
    } catch (error) {
         res.json({
            ok: false,
            msg: error.message
        })
        
    }
}