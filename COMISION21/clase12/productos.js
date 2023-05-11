const fs = require('fs');
const productosJSON = fs.readFileSync('./productosJSON', 'utf-8');
const productos =JSON.parse(productosJSON);

module.exports = {
    listar : function(){
        for (let i = 0; i < productos.length; i++) {
            console.log(
              `${productos[i].id} - ${productos[i].nombre} ${productos[i].marca} $${productos[i].precio}`
            );
          }
    }
}