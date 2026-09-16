import { UserModel } from "../models/models.users.js";

export async function usersget(req, res){
    try {
        const usuario = await UserModel.find();

        res.json({
            ok: true,
            msg: "Usuario Obtenido",
            data: usuario 
        })
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

        res.json({
            ok: true,
            msg: "Usuario Creado",
            data: user
        })
    } catch (error) {

             res.json({
            ok: false,
            msg: error.message
        })
        
        
    }
    
}