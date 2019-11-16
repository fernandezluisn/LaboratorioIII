var Perro = /** @class */ (function () {
    function Perro(name) {
        this.name = name;
    }
    Perro.prototype.makesound = function () {
        console.log("guau, guau " + this.name);
    };
    return Perro;
}());
var miPerro = new Perro("jorge");
var gato = /** @class */ (function () {
    function gato(name) {
        this.name = name;
    }
    gato.prototype.makesound = function () {
        console.log("miau " + this.name);
    };
    return gato;
}());
var miGato = new gato("adolfo");
var lista = new Array();
lista.push(miGato);
lista.push(miPerro);
lista.forEach(function (animal) {
    animal.makesound();
});
