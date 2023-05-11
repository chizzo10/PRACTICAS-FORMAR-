const {leerJSON,escribirJSON} = require('../data');



function Producto(id, nombre, marca, precio, descuento){
    this.id = id; 
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.descuento = descuento;
    this.stock = true;
}
module.exports = {
  productos : JSON.parse(productosJSON),
  listar: function (productos = this.productos) {
    console.log("****************LISTA DE PRODUCTOS****************")
    productos.forEach((producto, i) => {
      console.log(`${producto.id} - ${producto.nombre}, ${producto.marca}: $${producto.precio}`)  
    });
    console.log("***************************************************")
    return null
  },
  agregar: function(nombre, marca, precio, descuento){
    let producto = this.productos;
    let ultimoId = this.productos[this.productos.length -1]?productos[this.productos.length - 1].id : 0;
    fs.writeFileSync('./productos.json',JSON.stringify(productos, null, 3), 'utf-8') /* este producto es nuevo, no es el mismo. por eso lo llamamos otra vez, sobrescribe el json viejo */
    return `El producto ${nuevoProducto.nombre} se registró satisfactoriamente`
  },
  filtrar:function(marca){
    const productosFiltrados = this.productos.filter(producto => producto.marca === marca);
    return productosFiltrados
  }
};