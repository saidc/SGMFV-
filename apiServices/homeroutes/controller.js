//const {user,vehiculo} = require("../../services/sql/index.js");
Usuario_id = "Usuarios";
Vehiculo_id = "Vehiculos";
Alerta_id = "Alertas";

var getSidebarItems = async(req, res)=>{
    var msg = [
        {content: "Usuarios"  , id:Usuario_id},
        {content: "Vehiculos" , id:Vehiculo_id},
        {content: "Alertas"   , id:Alerta_id}
    ];
    return res.status(200).json({error:false, res:msg});
}

var getUsers = async(req, res)=>{
    const {PosicionFila , NoFilas,json} = req.body;

    var results = [
        {content: "Alerta1" , id:"1" , description: "random description 1"},
        {content: "Alerta2" , id:"2" , description: "random description 2"},
        {content: "Alerta3" , id:"3" , description: "random description 3"}
    ];

    var msg = {
        name:Usuario_id,
        num:results.length, 
        res:results
    };
    return res.status(200).json({error:false, res:msg});
}

var getVehicles = async(req, res)=>{
    const {PosicionFila ,NoFilas,json} = req.body;
    var results = [
        {content: "Alerta1" , id:"1" , description: "random description 1"},
        {content: "Alerta2" , id:"2" , description: "random description 2"},
        {content: "Alerta3" , id:"3" , description: "random description 3"}
    ];
    var msg = {
        name:Vehiculo_id,
        num:results.length, 
        res:results
    };
    return res.status(200).json({error:false, res:msg});
}

var getAlertas = async(req, res)=>{
    var results = [
        {content: "Alerta1" , id:"1" , description: "random description 1"},
        {content: "Alerta2" , id:"2" , description: "random description 2"},
        {content: "Alerta3" , id:"3" , description: "random description 3"}
    ];
    var msg = {
        name:Alerta_id,
        num:results.length, 
        res:results
    };
    return res.status(200).json({error:false, res:msg});
}

module.exports  = {
    getSidebarItems,
    getUsers,
    getVehicles,
    getAlertas
}
