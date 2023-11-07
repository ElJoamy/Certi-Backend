//EXTRA preguntar si esta bien

// Clase base abstracta que representa las funcionalidades comunes de una línea de teleférico
abstract class Teleferico {
    abstract iniciarRecorrido(): void;
    abstract detenerseEnEstacion(): void;
    abstract finalizarRecorrido(): void;
}

// Clase concreta que representa una línea específica del teleférico
class LineaRoja extends Teleferico {
    iniciarRecorrido(): void {
        console.log("Iniciando recorrido de la Línea Roja");
    }

    detenerseEnEstacion(): void {
        console.log("Deteniéndose en una estación de la Línea Roja");
    }

    finalizarRecorrido(): void {
        console.log("Finalizando recorrido de la Línea Roja");
    }
}

class LineaAzul extends Teleferico {
    iniciarRecorrido(): void {
        console.log("Iniciando recorrido de la Línea Azul");
    }

    detenerseEnEstacion(): void {
        console.log("Deteniéndose en una estación de la Línea Azul");
    }

    finalizarRecorrido(): void {
        console.log("Finalizando recorrido de la Línea Azul");
    }
}

// Clase principal
class tarea02 {
    public static main(): void {
        const lineaRoja: Teleferico = new LineaRoja();
        const lineaAzul: Teleferico = new LineaAzul();

        lineaRoja.iniciarRecorrido();
        lineaRoja.detenerseEnEstacion();
        lineaRoja.finalizarRecorrido();

        lineaAzul.iniciarRecorrido();
        lineaAzul.detenerseEnEstacion();
        lineaAzul.finalizarRecorrido();
    }
}

tarea02.main();
