const persona ={
    nombre : "juan",
    apellido : "Caseres",
    rdad : 40,
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido
    }
}

console.log(nombreCompleto());