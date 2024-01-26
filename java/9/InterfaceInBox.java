import java.util.ArrayList;
import java.util.Scanner;


public class InterfaceInBox {
    public static void main(String[] args) {
         Book book1 = new Book("Fyodor Dostoevsky", "Crime and Punishment", 2);
        Book book2 = new Book("Robert Martin", "Clean Code", 1);
        Book book3 = new Book("Kent Beck", "Test Driven Development", 0.5);

        CD cd1 = new CD("Pink Floyd", "Dark Side of the Moon", 1973);
        CD cd2 = new CD("Wigwam", "Nuclear Nightclub", 1975);
        CD cd3 = new CD("Rendezvous Park", "Closer to Being Here", 2012);

        System.out.println(book1);
        System.out.println(book2);
        System.out.println(book3);
        System.out.println(cd1);
        System.out.println(cd2);
        System.out.println(cd3);
    }
    public interface Packable {
        double weight();
    }
    public class Book implements Packable {
        private String name;
        private String author;
        private double weight;
        public Book(String author, String name, double weight){
            this.name = name; 
            this.author = author;
            this.weight = weight;
        }
        public double weight(){
            return this.weight();
        }
    }
    public class CD implements Packable {
        private String name;
        private String author;
        private double weight;
        public CD(String author, String name, double weight){
            this.name = name; 
            this.author = author;
            this.weight = weight;
        }
        public double weight(){
            return this.weight();
        }
    }
    public class Box implements Packable {
        private double maxWeight;
        private double weight;
        private ArrayList<Packable> lista;
        public Box(double maxWeight){
            this.maxWeight = maxWeight;
            this.lista = new ArrayList<>();
        }
        public double weight() {
            return this.weight;
        }
        public void add(Packable object) {
            if(object.weight() + this.weight < this.maxWeight) {
                this.lista.add(object);
                this.weight = this.weight + object.weight();
            }
        }
    }
}