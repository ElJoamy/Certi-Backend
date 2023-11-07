// Clase MovieProjectorOperator
var MovieProjectorOperator = /** @class */ (function () {
    function MovieProjectorOperator() {
    }
    MovieProjectorOperator.prototype.startProjection = function () {
        console.log("Starting projection ...");
    };
    MovieProjectorOperator.prototype.stopProjection = function () {
        console.log("Stopping projection ...");
    };
    MovieProjectorOperator.prototype.checkProjectorStatus = function () {
        return "Projector is running";
    };
    return MovieProjectorOperator;
}());
// Clase TicketSellerEmployee
var TicketSellerEmployee = /** @class */ (function () {
    function TicketSellerEmployee() {
    }
    TicketSellerEmployee.prototype.sellTicket = function () {
        console.log("Selling ticket ...");
    };
    TicketSellerEmployee.prototype.refundTicket = function () {
        console.log("Refunding ticket ...");
    };
    TicketSellerEmployee.prototype.checkTicketAvailability = function () {
        return 100;
    };
    return TicketSellerEmployee;
}());
// Clase ConcessionStandStaff
var ConcessionStandStaff = /** @class */ (function () {
    function ConcessionStandStaff() {
    }
    ConcessionStandStaff.prototype.serveSnack = function () {
        console.log("Serving snack ...");
    };
    ConcessionStandStaff.prototype.restockItems = function () {
        console.log("Restocking items ...");
    };
    ConcessionStandStaff.prototype.processPayment = function () {
        console.log("Processing payment ...");
    };
    return ConcessionStandStaff;
}());
// Clase principal del sistema de gestión de cine
var Tarea01 = /** @class */ (function () {
    function Tarea01() {
    }
    Tarea01.main = function (args) {
        var movieProjectorOperator = new MovieProjectorOperator();
        var ticketSellerEmployee = new TicketSellerEmployee();
        var concessionStandStaff = new ConcessionStandStaff();
        movieProjectorOperator.startProjection();
        ticketSellerEmployee.sellTicket();
        concessionStandStaff.serveSnack();
    };
    return Tarea01;
}());
Tarea01.main([]);
