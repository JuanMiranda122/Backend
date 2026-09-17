import { serviceModel } from "../models/models.service.js";

export async function serviceget(req, res) {

    try {
        const service = await serviceModel.find();

        if(service.length === 0){
            res.json({
                ok: false,
                msg: "Servicio no obtenido"
            })
        }else{
            res.json({
                ok:true, 
                msg: "Servicio Obtenidos",
                data: service
            })
        }
    } catch (error) {

           res.json({
            ok: false,
            msg: error.message
        })
        
    }
    
}

export async function servicepost(req, res){

    try {
        const data = req.body;

        if(data.presupuesto < 100000){

            res.json({
                ok: false,
                msg: "el presupuesto es muy bajo para cualquier peticion "
            })
        }else{

            const serice = await serviceModel.create(data);

              res.json({
                ok: true,
                msg: "Nos contactaremos contigo",
                data: data
            })
            
        }
    } catch (error) {
          res.json({
            ok: false,
            msg: error.message
        })
        
    }
}

export async function servicedelte(req, res){
    try {

        const id = req.params.id

        const user = await serviceModel.findByIdAndDelete(id);


        res.json({
            ok: true,
            msg: "Servicio eliminado",
            data: user
        })
    } catch (error) {
               
        res.json({
            ok: false,
            msg: error.message
        })
        
    }
}

export async function servicepatch(req, res){
    try {
       const id = req.params.id;
       const data = req.body;
       
       const service = await serviceModel.findByIdAndUpdate(id, data, {new: true});

       res.json({
        ok: true,
        msg: "Servicio Actualizado",
        data: service
       })
    } catch (error) {
        res.json({
            ok: false,
            msg: error.message
        }) 
    }
}