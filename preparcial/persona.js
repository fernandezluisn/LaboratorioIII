var preparcial;
(function (preparcial) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido) {
            this.apellido = apellido;
            this.nombre = nombre;
        }
        Persona.prototype.getNombre = function () {
            return this.nombre;
        };
        Persona.prototype.getApellido = function () {
            return this.apellido;
        };
        return Persona;
    }());
    preparcial.Persona = Persona;
})(preparcial || (preparcial = {}));
