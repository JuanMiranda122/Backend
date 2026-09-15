export async function getProducts(req, res){

    try {

        res.json({
            ok: true,
            msg: "producto obtenido"    ,
            data: 'producto'
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
        res.json({
            ok: true,
            msg: "Prodcuto creado"    , 
            data: "producto"
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