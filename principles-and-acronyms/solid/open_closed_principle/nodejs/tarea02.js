var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase base abstracta que representa las funcionalidades comunes de una línea de teleférico
var Teleferico = /** @class */ (function () {
    function Teleferico() {
    }
    return Teleferico;
}());
// Clase concreta que representa una línea específica del teleférico
var LineaRoja = /** @class */ (function (_super) {
    __extends(LineaRoja, _super);
    function LineaRoja() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineaRoja.prototype.iniciarRecorrido = function () {
        console.log("Iniciando recorrido de la Línea Roja");
    };
    LineaRoja.prototype.detenerseEnEstacion = function () {
        console.log("Deteniéndose en una estación de la Línea Roja");
    };
    LineaRoja.prototype.finalizarRecorrido = function () {
        console.log("Finalizando recorrido de la Línea Roja");
    };
    return LineaRoja;
}(Teleferico));
var LineaAzul = /** @class */ (function (_super) {
    __extends(LineaAzul, _super);
    function LineaAzul() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineaAzul.prototype.iniciarRecorrido = function () {
        console.log("Iniciando recorrido de la Línea Azul");
    };
    LineaAzul.prototype.detenerseEnEstacion = function () {
        console.log("Deteniéndose en una estación de la Línea Azul");
    };
    LineaAzul.prototype.finalizarRecorrido = function () {
        console.log("Finalizando recorrido de la Línea Azul");
    };
    return LineaAzul;
}(Teleferico));
// Clase principal
var tarea02 = /** @class */ (function () {
    function tarea02() {
    }
    tarea02.main = function () {
        var lineaRoja = new LineaRoja();
        var lineaAzul = new LineaAzul();
        lineaRoja.iniciarRecorrido();
        lineaRoja.detenerseEnEstacion();
        lineaRoja.finalizarRecorrido();
        lineaAzul.iniciarRecorrido();
        lineaAzul.detenerseEnEstacion();
        lineaAzul.finalizarRecorrido();
    };
    return tarea02;
}());
tarea02.main();
