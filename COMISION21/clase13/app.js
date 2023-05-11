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

        if ([nombre, marca, precio].includes(undefined || NaN)) {
            console.log("ERROR: Todos los datos obligatorios");
            break
        }


        if([precio, descuento].includes(NaN)){
            console.log("error: el precio o el descuento son invalidos");
            break;
        }
        let repuesta = moduloProductos.agregar(nombre, marca, precio, descuento)

        console.log(repuesta);


        break
    default:
        break;
}