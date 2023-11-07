//EXTRA preguntar si esta bien

// Interfaz MovieProjector
interface MovieProjector {
    startProjection(): void;
    stopProjection(): void;
    checkProjectorStatus(): string;
}

// Interfaz TicketSeller
interface TicketSeller {
    sellTicket(): void;
    refundTicket(): void;
    checkTicketAvailability(): number;
}

// Interfaz ConcessionStandWorker
interface ConcessionStandWorker {
    serveSnack(): void;
    restockItems(): void;
    processPayment(): void;
}

// Clase MovieProjectorOperator
class MovieProjectorOperator implements MovieProjector {
    startProjection(): void {
        console.log("Starting projection ...");
    }

    stopProjection(): void {
        console.log("Stopping projection ...");
    }

    checkProjectorStatus(): string {
        return "Projector is running";
    }
}

// Clase TicketSellerEmployee
class TicketSellerEmployee implements TicketSeller {
    sellTicket(): void {
        console.log("Selling ticket ...");
    }

    refundTicket(): void {
        console.log("Refunding ticket ...");
    }

    checkTicketAvailability(): number {
        return 100;
    }
}

// Clase ConcessionStandStaff
class ConcessionStandStaff implements ConcessionStandWorker {
    serveSnack(): void {
        console.log("Serving snack ...");
    }

    restockItems(): void {
        console.log("Restocking items ...");
    }

    processPayment(): void {
        console.log("Processing payment ...");
    }
}

// Clase principal
class Tarea01 {
    public static main(): void {
        const movieProjectorOperator = new MovieProjectorOperator();
        const ticketSellerEmployee = new TicketSellerEmployee();
        const concessionStandStaff = new ConcessionStandStaff();

        movieProjectorOperator.startProjection();
        ticketSellerEmployee.sellTicket();
        concessionStandStaff.serveSnack();
    }
}

Tarea01.main();