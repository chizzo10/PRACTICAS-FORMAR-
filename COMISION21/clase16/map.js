const productos = require('./data/productos.json');
​
const cambiarStock = (id) => {
    const productosActualizados = [];
​
    productos.forEach(producto => {
        if(producto.id === id){
            producto.stock = false
            productosActualizados.push(producto)
        }else {
            productosActualizados.push(producto)
        }
    })
    return productosActualizados
}
​
const cambiarStockConMap = (id) => {
    
    return productos.map((producto) => {
        if(producto.id === id){
            producto.stock = !producto.stock
        }
        return producto
    })
}
​
console.log(cambiarStockConMap(1))