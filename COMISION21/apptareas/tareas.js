const fs = require('fs');
const dataTareas = require('./dataTareas.json');


function Tareas(titulo, estado){
    this.titulo = titulo,
    this.estado = estado

}

module.exports={
    
        listar: function(){
          dataTareas.forEach((Element,i) => {
            console.log(` ${i+1}- ${Element.titulo} ---->${Element.estado}`);
          })
        
    },
    agregar: function(titulo, estado){
let nuevaTarea = new Tareas(titulo, estado);
console.log(nuevaTarea)
    }
}

//const dataTareas = require('./dataTareas');

//let dataTareasJSON = JSON.stringify(dataTareas,null,2);

//fs.writeFileSync('dataTareas.json',dataTareasJSON,'utf-8');