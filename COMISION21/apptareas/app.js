const argv = require('process').argv;
const comando = argv[2];

const tareas = require('./tareas');

let respuesta;

switch(comando){
    case 'listar':
        tareas.listar()
            break;

            case 'agregar':
                let titulo = argv[3];
                let estado = argv[4];

                if([titulo,estado].includes(undefined)){
                    console.log('Por favor ingrese todos los datos');
                    return null;
                };

                respuesta = tareas.agregar(titulo,estado);
                break

                
        default:
            break;
}