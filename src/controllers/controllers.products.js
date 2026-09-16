import { ProductModel } from "../models/models.products.js";
import productsRouter from "../routes/routes.productos.js";

export async function getProducts(req, res){

    try {

        const products = await ProductModel.find();


        res.json({
            ok: true,
            msg: "producto obtenido"    ,
            data: products
        })
        
    } catch (error) {

        res.json({
            ok: false,
            msg: error
        })
        
    }
    
}

export async function deleteProducts(req, res){

    try {

        res.json({
            ok: true,
            msg: "Producto Eliminado"    ,
            data: "producto"
        })
        
    } catch (error) {

         res.json({
            ok: false,
            msg: error
        })
        
        
    }
    
}

export async function postProdcuts(req, res){
    try {

        
        const data = req.body; 
       
        const product  = await ProductModel.create(data);


        res.json({
            ok: true,
            msg: "Prodcuto creado"    , 
            data: product 
        })
    } catch (error) {
         res.json({
            ok: false,
            msg: error
        })
        
    }
}

export async function patchProdcut(req, res){
    try {
        res.json({
            ok: true,
            msg: "Producto Actualizado"    ,
            data: "Producto"
        })
    } catch (error) {
         res.json({
            ok: false,
            msg: error
        })
        
    }
}