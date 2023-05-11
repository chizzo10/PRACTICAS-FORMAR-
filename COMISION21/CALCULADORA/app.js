/////requerimientos/////
const argv = require('process').argv;
const { log } = require('console');
const calculadora = require('./calculadora');


////variables/////
const operacion = argv[2];
const numeroA = argv[3];
const numeroB = argv[4];

let resultado = 0;


//////funcionalidades/////
if (typeof numeroA === 'undefined' || typeof numeroB === 'undefined') {
    console.log('por favor ingrese dos numeros');
}

if (operacion === 'sumar') {
    resultado = calculadora.sumar(+numeroA, +numeroB);
    console.log(`El resultado de la suma es ${resultado}`);
}else{
    if (operacion === 'restar') {
        resultado = calculadora.restar(+numeroA, +numeroB);
        console.log(`El resultado de la resta es ${resultado}`)
    }
    
    if (operacion === 'multiplicar') {
        resultado = calculadora.multiplicar(+numeroA, +numeroB);
        console.log(`El resultado de la multiplicacion es de ${resultado}`)
    }
    
    if (operacion === `dividir`) {
        resultado = calculadora.dividir(+numeroA, +numeroB);
        if (numeroA === 0 && numeroB === 0) {
            return console.log('0')
        }
        console.log(`El resultado de la division es de ${resultado}`)
    }
}

