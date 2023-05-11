const persona ={
    nombre : "Roberto",
    apellido : "Zalazar",
    edad : 40,
    profesion : "alumno",
    casado : true,
    hobbie : ["javascript","php","html"],
    nombreCompleto : function(){
        return `Mi nombre es : ${this.nombre} ${this.apellido}`
    }
}

console.log(persona.nombreCompleto);