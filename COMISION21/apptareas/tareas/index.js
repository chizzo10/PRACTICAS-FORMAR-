const fs = require('fs');
const dataTareas = require('../data/dataTareas.json');
const Tareas = require('./tareas');
const { leerJSON, escribirJSON } = require('../data/index');

module.exports = {
  listar: function() {
    dataTareas.forEach((element, i) => {
      console.log(` ${i + 1}- ${element.titulo} <----->${element.estado}`);
    });
  },

  agregar: function(titulo, estado) {
    let nuevaTarea = new Tareas(titulo, estado);

    dataTareas.push(nuevaTarea);
    escribirJSON(dataTareas);
    console.log('********************');
    console.log('Informacion Guardada');
    console.log('********************');

    return nuevaTarea;
  },

  buscar: function(titulo) {
    let tareaEncontrada = dataTareas.find((element) => element.titulo === titulo);
    return tareaEncontrada ? tareaEncontrada : 'Tarea no encontrada';
  },

  filtrar: function(estado) {
    let tareasFiltradas = dataTareas.filter((element) => element.estado === estado);
    return tareasFiltradas.length > 0 ? tareasFiltradas : 'No se encontraron tareas con ese estado';
  },

  editar: function(titulo, nuevoEstado) {
    let tareaEncontrada = dataTareas.find((element) => element.titulo === titulo);
    if (tareaEncontrada) {
      tareaEncontrada.estado = nuevoEstado;
      escribirJSON(dataTareas);
      return 'El estado de la tarea ha sido modificado';
    } else {
      return 'Tarea no encontrada';
    }
  },

  eliminar: function(titulo) {
    let indice = dataTareas.findIndex((element) => element.titulo === titulo);
    if (indice !== -1) {
      dataTareas.splice(indice, 1);
      escribirJSON(dataTareas);
      return 'Tarea eliminada correctamente';
    } else {
      return 'Tarea no encontrada';
    }
  },
};

//const dataTareas = require('./dataTareas');

//let dataTareasJSON = JSON.stringify(dataTareas,null,2);

//fs.writeFileSync('dataTareas.json',dataTareasJSON,'utf-8');