const argv = require('process').argv;
const comando = argv[2];
const tareas = require('./tareas/index');

let respuesta;

switch (comando) {
  case 'listar':
    tareas.listar();
    break;

  case 'agregar':
    let tituloAgregar = argv[3];
    let estadoAgregar = argv[4];

    if (tituloAgregar === undefined || estadoAgregar === undefined) {
      console.log('Por favor ingrese todos los datos');
      return null;
    }

    respuesta = tareas.agregar(tituloAgregar, estadoAgregar);
    break;

  case 'buscar':
    let filtroBuscar = argv[3];
    respuesta = tareas.buscar(filtroBuscar);
    console.log(respuesta);
    break;

  case 'filtrar':
    let estadoFiltrar = argv[3];
    respuesta = tareas.filtrar(estadoFiltrar);
    console.log(respuesta);
    break;

  case 'editar':
    let tituloEditar = argv[3];
    let nuevoEstadoEditar = argv[4];
    respuesta = tareas.editar(tituloEditar, nuevoEstadoEditar);
    console.log(respuesta);
    break;

  case 'eliminar':
    let tituloEliminar = argv[3];
    respuesta = tareas.eliminar(tituloEliminar);
    console.log(respuesta);
    break;

  default:
    console.log('Por favor ingrese datos válidos');
    break;
}
