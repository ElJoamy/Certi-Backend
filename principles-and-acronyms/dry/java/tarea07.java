class Product {
    private String name;
    private int stock;

    public Product(String name, int initialStock) {
        this.name = name;
        this.stock = initialStock;
    }

    public void sell(int quantity) {
        if (stock >= quantity) {
            stock -= quantity;
            System.out.println(name + " vendido. Stock actualizado: " + stock);
        } else {
            System.out.println("Stock insuficiente para " + name + "s.");
        }
    }
}

class Book extends Product {
    public Book(int initialStock) {
        super("Libro", initialStock);
    }
}

class Game extends Product {
    public Game(int initialStock) {
        super("Juego", initialStock);
    }
}

class tarea07 {
    public static void main(String[] args) {
        Book book = new Book(10);
        Game game = new Game(5);

        book.sell(2);
        game.sell(3);
        book.sell(5);
        game.sell(2);
    }
}