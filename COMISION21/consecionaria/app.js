const autos = require('./autos.json');
const personas = require('./persona.json')

const concesionaria ={
    autos : autos, 
    buscarAuto : function(patente){
        return this.autos.find(auto => auto.patente === patente) || null
    },

    venderAuto : function(patente){
        let auto = this.buscarAuto(patente);
        auto &&(auto.vendido = true)
        return auto
    },

    autosParaLaVenta : function(){
        return this.autos.filter(auto => !auto.vendido)
    },

    autosNuevos : function(){
        
        return this.autosParaLaVenta().filter(auto => auto.km < 100)
    },

    listaDeVentas : function(){
        return this.autos.filter(auto => auto.vendido).map(auto => auto.precio)
    },

    totalDeVentas : function(){
        return this.listaDeVentas().reduce((numbre1, number2) => numbre1 + number2, 0)
    },

    puedeComprar: function(auto, persona){
        return auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas
    },
};

console.log(concesionaria.buscarAuto('APL123'));