const persona = {
    nombre : "Juan",
    apellido : "Cáceres",
    edad : 40,
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido
    }
}
​
const {edad, nombre, apellido} = persona;
​
​
console.log(persona.nombreCompleto());
console.log(edad);