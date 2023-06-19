var Auto = /** @class */ (function () {
    function Auto(marca, modelo, potencia, maxVelocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.maximaVelocidad = maxVelocidad;
    }
    Auto.prototype.medirTiempo = function (distancia) {
        var velocidadOptima = this.maximaVelocidad * 0.8;
        var tiempo = distancia / velocidadOptima;
        return tiempo;
    };
    return Auto;
}());
var autos = [
    new Auto("Toyota", "Corolla", 150, 200),
    new Auto("Ford", "Mustang", 300, 250),
    new Auto("Chevrolet", "Camaro", 250, 230),
    new Auto("Honda", "Civic", 180, 190),
    new Auto("Volkswagen", "Golf", 120, 170),
];
for (var _i = 0, autos_1 = autos; _i < autos_1.length; _i++) {
    var auto = autos_1[_i];
    console.log("Marca: ".concat(auto.marca, ", Modelo: ").concat(auto.modelo, ", Potencia: ").concat(auto.potencia, ", Maxima. Velocidad: ").concat(auto.maximaVelocidad));
}
var distancia = 100;
for (var _a = 0, autos_2 = autos; _a < autos_2.length; _a++) {
    var auto = autos_2[_a];
    var tiempoptimo = auto.medirTiempo(distancia);
    console.log("El auto: ".concat(auto.marca, " ").concat(auto.modelo, ", tarda: ").concat(tiempoptimo.toFixed(2), ", horas en recorrer: ").concat(distancia, ", kil\u00F3metros de manera \u00F3ptima."));
}
