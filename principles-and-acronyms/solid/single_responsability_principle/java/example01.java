class Pokemon {
    private String name;
    private String type;
    // Constructor, getters y setters
}

interface Attacker {
    void attack();
}

interface Healer {
    void heal();
}

interface Flyer {
    void fly();
}

interface Swimmer {
    void swim();
}

class Pikachu implements Attacker {
    public void attack() {
        System.out.println("Pikachu usa Impactrueno!");
    }
}

class Lapras implements Swimmer, Attacker {
    public void swim() {
        System.out.println("Lapras nada tranquilamente!");
    }

    public void attack() {
        System.out.println("Lapras usa Hidrobomba!");
    }
}

class Charizard implements Flyer, Attacker {
    public void fly() {
        System.out.println("Charizard vuela!");
    }

    public void attack() {
        System.out.println("Charizard usa Lanzallamas!");
    }
}

class Chansey implements Healer {
    public void heal() {
        System.out.println("Chansey usa Cura!");
    }
}

class Principal {
	public static void main(String [] args) {
		Lapras lapra = new Lapras();
		lapra.swim();
        
        Charizard chari = new Charizard();
        chari.fly();
        chari.attack();

        Chansey chan = new Chansey();
        chan.heal();

        Pikachu pika = new Pikachu();
        pika.attack();
	}
}