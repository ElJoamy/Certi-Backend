// Interfaz MovieProjector
interface MovieProjector {
    void startProjection();
    void stopProjection();
    String checkProjectorStatus();
}

// Interfaz TicketSeller
interface TicketSeller {
    void sellTicket();
    void refundTicket();
    int checkTicketAvailability();
}

// Interfaz ConcessionStandWorker
interface ConcessionStandWorker {
    void serveSnack();
    void restockItems();
    void processPayment();
}

// Clase MovieProjectorOperator
class MovieProjectorOperator implements MovieProjector {
    public void startProjection() {
        System.err.println("Starting projection ...");
    }

    public void stopProjection() {
        System.err.println("Stopping projection ...");
    }

    public String checkProjectorStatus() {
        return "Projector is running";
    }
}

// Clase TicketSellerEmployee
class TicketSellerEmployee implements TicketSeller {
    public void sellTicket() {
        System.err.println("Selling ticket ...");
    }

    public void refundTicket() {
        System.err.println("Refunding ticket ...");
    }

    public int checkTicketAvailability() {
        return 100;
    }
}

// Clase ConcessionStandStaff
class ConcessionStandStaff implements ConcessionStandWorker {
    public void serveSnack() {
        System.err.println("Serving snack ...");
    }

    public void restockItems() {
        System.err.println("Restocking items ...");
    }

    public void processPayment() {
        System.err.println("Processing payment ...");
    }
}

// Clase principal del sistema de gestión de cine
public class tarea01 {
    public static void main(String[] args) {
        MovieProjectorOperator movieProjectorOperator = new MovieProjectorOperator();
        TicketSellerEmployee ticketSellerEmployee = new TicketSellerEmployee();
        ConcessionStandStaff concessionStandStaff = new ConcessionStandStaff();

        movieProjectorOperator.startProjection();
        ticketSellerEmployee.sellTicket();
        concessionStandStaff.serveSnack();
    }
}
