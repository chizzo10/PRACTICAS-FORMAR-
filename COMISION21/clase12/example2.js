const edad = +process.argv[2];

function puedeEntrar(edad) {
    switch (true) {
        case edad < 16:
            console.log("no podés entrar");
            break;
        case edad >= 16 && edad < 18:
            console.log("puedes entrar con un acompañante");
            break;
        case edad >= 18:
            console.log("podés entrar");
            break;
        default:
            console.log("Debes darme tu edad!!");
            break;
    }
}

puedeEntrar(edad)