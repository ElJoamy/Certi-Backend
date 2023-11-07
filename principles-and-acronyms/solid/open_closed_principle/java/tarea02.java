// Clase base abstracta que representa las funcionalidades comunes de una línea de teleférico
abstract class Teleferico {
    abstract void iniciarRecorrido();
    abstract void detenerseEnEstacion();
    abstract void finalizarRecorrido();
}

// Clase concreta que representa una línea específica del teleférico
class LineaRoja extends Teleferico {
    @Override
    void iniciarRecorrido() {
        System.out.println("Iniciando recorrido de la Línea Roja");
    }

    @Override
    void detenerseEnEstacion() {
        System.out.println("Deteniéndose en una estación de la Línea Roja");
    }

    @Override
    void finalizarRecorrido() {
        System.out.println("Finalizando recorrido de la Línea Roja");
    }
}

class LineaAzul extends Teleferico {
    @Override
    void iniciarRecorrido() {
        System.out.println("Iniciando recorrido de la Línea Azul");
    }

    @Override
    void detenerseEnEstacion() {
        System.out.println("Deteniéndose en una estación de la Línea Azul");
    }

    @Override
    void finalizarRecorrido() {
        System.out.println("Finalizando recorrido de la Línea Azul");
    }
}

//Clase main
public class tarea02 {
    public static void main(String[] args) {
        Teleferico lineaRoja = new LineaRoja();
        Teleferico lineaAzul = new LineaAzul();

        lineaRoja.iniciarRecorrido();
        lineaRoja.detenerseEnEstacion();
        lineaRoja.finalizarRecorrido();

        lineaAzul.iniciarRecorrido();
        lineaAzul.detenerseEnEstacion();
        lineaAzul.finalizarRecorrido();
    }
}
