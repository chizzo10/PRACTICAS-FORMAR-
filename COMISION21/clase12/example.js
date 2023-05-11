let color = process.argv[2]
function semaforo1(color){
    if(color === 'verde'){
        console.log('avanzar')
    }else if(color==='amarillo'){
        console.log('precaución')
    }else if(color === 'rojo'){
        console.log('detenerse');
    }else{
        console.log('Semáforo descompuesto')
    }
}
semaforo1(color)


function semaforo2(color){
    switch (color) {
        case "verde":
            console.log('avanzar')
                break;
        case "amarillo":
            console.log('precaución')
                break;
        case "rojo":
            console.log('detenerse');
                break;
        default:
            console.log('Semáforo descompuesto')
            break;
    }
}
semaforo2(color)