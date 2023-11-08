interface PokemonAttack {
    void execute();
}

// class Pikachu implements PokemonAttack {
//     public void execute() {
//         electricAttack();
//     }

//     private void electricAttack() {
//         System.out.println("Pikachu usa Ataque Eléctrico!");
//     }
// }

// class Charmander implements PokemonAttack {
//     public void execute() {
//         fireAttack();
//         fireBlast();
//     }

//     private void fireAttack() {
//         System.out.println("Charmander usa Ataque de Fuego!");
//     }

//     private void fireBlast() {
//         System.out.println("Charmander usa Explosión de Fuego!");
//     }

// }

// Piensa en cómo podrías usar el DIP para manejar múltiples tipos de ataques o estrategias de batalla para los Pokémon.
// Sin volver al ISP, ¿cómo podrías hacer que el código sea más flexible y extensible?

class ElectricAttack implements PokemonAttack {
    public void execute() {
        System.out.println("Ataque Eléctrico!");
    }
}

class FireAttack implements PokemonAttack {
    public void execute() {
        System.out.println("Ataque de Fuego!");
    }
}

class FireBlast implements PokemonAttack {
    public void execute() {
        System.out.println("Explosión de Fuego!");
    }
}

class WaterAttack implements PokemonAttack {
    public void execute() {
        System.out.println("Ataque de Agua!");
    }
}

class PokemonTrainer {
    private PokemonAttack attackStrategy;

    public PokemonTrainer(PokemonAttack attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    void commandToAttack() {
        attackStrategy.execute();
    }

    public void setAttackStrategy(PokemonAttack attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

}

class Main {
    public static void main(String[] args) {
        PokemonTrainer ash = new PokemonTrainer(new ElectricAttack());
        ash.commandToAttack();

        ash.setAttackStrategy(new WaterAttack());
        ash.commandToAttack();
        
        PokemonTrainer brock = new PokemonTrainer(new FireAttack());
        brock.commandToAttack();

        brock.setAttackStrategy(new FireBlast());
        brock.commandToAttack();

    }
}