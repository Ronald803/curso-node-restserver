const { response, request  } = require ("express");

const usuariosGet = (req=request , res=response)=> {
    const {nombre, edad, habilidad="ninguna"} = req.query;

    res.json({
        ok: true,
        msg: "get API - controlador",
        nombre,
        edad,
        habilidad
    });
}

const usuariosPut = (req, res)=> {
    const id = req.params.id;
    res.status(500).json({
        ok: true,
        msg: "put API - controlador",
        id
    });
}


const usuriosPost = (req, res)=> {
    const {nombre} = req.body;
    res.status(201).json({
        ok: true,
        msg: "post API- controlador",
        nombre
    });
}
const usuariosDelete = (req, res)=> {
    res.json({
        ok: true,
        msg: "delete API- controlador"
    });
}
const usuariosPatch = (req, res)=> {
    res.json({
        ok: true,
        msg: "patch API- controlador"
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuriosPost,
    usuariosDelete,
    usuariosPatch
}