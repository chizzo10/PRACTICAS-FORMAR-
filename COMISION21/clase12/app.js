const argv = require('process').argv;
const moduloProductos = require('./productos');


const comando = argv[2];
switch (comando) {
    case "listar":
        moduloProductos.listar();
        break;
    case "agregar":
        let nombre = argv[3];
        let marca = argv[4];
        let precio = +argv[5];
        let descuento = +argv[6] || 0;

       if([nombre,marca,precio].includes(undefined || NaN)){
        console.log("ERROR: Todos los datos obligatorios");
       }else{
        console.log("Guardando la información...");
       }

        break
    default:
        break;
}