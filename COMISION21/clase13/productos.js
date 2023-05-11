const fs = require("fs");
const productosJSON = fs.readFileSync("./productos.json", "utf-8");
const productos = JSON.parse(productosJSON);

function Producto(nombre, marca, precio, descuento) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.descuento = descuento;
}

module.exports = {
    listar: function () {
        for (let i = 0; i < productos.length; i++) {
            console.log(
                `${productos[i].id} - ${productos[i].nombre} ${productos[i].marca} $${productos[i].precio}`
            );
        }

        return null
    },

    agregar: function (nombre, marca, precio, descuento) {
        let ultimoId = productos[productos.length - 1] ? productos[productos.length -1].id : 0;

        let nuevoProducto = new Producto(ultimmoId +1,nombre, marca, precio, descuento);
        fs.writeFileSync('./productos.json',JSON.stringify(productos,null,3),'utf-8')
        console.log(nuevoProducto);
    }
};