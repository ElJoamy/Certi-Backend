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

class LineaVerde extends Teleferico {
    iniciarRecorrido(): void {
        console.log("Iniciando recorrido de la Línea Verde");
    }

    detenerseEnEstacion(): void {
        console.log("Deteniéndose en una estación de la Línea Verde");
    }

    finalizarRecorrido(): void {
        console.log("Finalizando recorrido de la Línea Verde");
    }
}

class LineaAmarilla extends Teleferico {
    iniciarRecorrido(): void {
        console.log("Iniciando recorrido de la Línea Amarilla");
    }

    detenerseEnEstacion(): void {
        console.log("Deteniéndose en una estación de la Línea Amarilla");
    }

    finalizarRecorrido(): void {
        console.log("Finalizando recorrido de la Línea Amarilla");
    }
}

// Clase principal
class tarea02 {
    public static main(): void {
        const lineaRoja: Teleferico = new LineaRoja();
        const lineaAzul: Teleferico = new LineaAzul();
        const lineaVerde: Teleferico = new LineaVerde();
        const lineaAmarilla: Teleferico = new LineaAmarilla();

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

tarea02.main();
