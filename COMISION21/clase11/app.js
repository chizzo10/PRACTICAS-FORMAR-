const fs = requier('fs');
const productoJSon = fs.readFileSyne('./producto.jason','utf-8');
const JSONParseado = JSON.parse(productoJSON)


//const productos = requiere('./productos');
//const produco = JSON.stringify(productos,null,3)

const productosJSON = fs.readFileSync('./productos.json','utf-8');s
function precioFinal(precio,descuento){
    return precio -((descuento * precio) /100)
}


const nuevoProducto =  {
    id : 3,
    nombre : "tijera",
    marca : 'mapped',
    precio : 300,
    descuento : 10,
    stock : true,
   
}

productos.push(nuevoProducto);

fs.writeFileSync('./productos.json',JSON.stringify(productos,null,3),'utf-8')
console.log(productos);