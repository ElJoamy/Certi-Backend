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

class LineaVerde extends Teleferico {
    @Override
    void iniciarRecorrido() {
        System.out.println("Iniciando recorrido de la Línea Verde");
    }

    @Override
    void detenerseEnEstacion() {
        System.out.println("Deteniéndose en una estación de la Línea Verde");
    }

    @Override
    void finalizarRecorrido() {
        System.out.println("Finalizando recorrido de la Línea Verde");
    }
}

class LineaAmarilla extends Teleferico {
    @Override
    void iniciarRecorrido() {
        System.out.println("Iniciando recorrido de la Línea Amarilla");
    }

    @Override
    void detenerseEnEstacion() {
        System.out.println("Deteniéndose en una estación de la Línea Amarilla");
    }

    @Override
    void finalizarRecorrido() {
        System.out.println("Finalizando recorrido de la Línea Amarilla");
    }
}

//Clase main
public class tarea02 {
    public static void main(String[] args) {
        Teleferico lineaRoja = new LineaRoja();
        Teleferico lineaAzul = new LineaAzul();
        Teleferico lineaVerde = new LineaVerde();
        Teleferico lineaAmarilla = new LineaAmarilla();

        lineaRoja.iniciarRecorrido();
        lineaRoja.detenerseEnEstacion();
        lineaRoja.finalizarRecorrido();

        lineaAzul.iniciarRecorrido();
        lineaAzul.detenerseEnEstacion();
        lineaAzul.finalizarRecorrido();

        lineaVerde.iniciarRecorrido();
        lineaVerde.detenerseEnEstacion();
        lineaVerde.finalizarRecorrido();

        lineaAmarilla.iniciarRecorrido();
        lineaAmarilla.detenerseEnEstacion();
        lineaAmarilla.finalizarRecorrido();
    }
}
