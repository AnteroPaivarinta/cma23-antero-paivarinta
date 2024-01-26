import java.util.Scanner;

public class Animals {
     public static void main(String[] args) {
        Cat cat = new Cat();
        cat.purr();
        cat.eat();

        Cat garfield = new Cat("Garfield");
        garfield.purr();
        NoiseCapable dog = new Dog();
        dog.makeNoise();

        NoiseCapable catOne = new Cat("Garfield");
        catOne.makeNoise();
        Cat c = (Cat) catOne;
        c.purr();
    }
    public interface  NoiseCapable {
        void makeNoise();
        
    }
    public static class Animal {
        private String name;
        public Animal(String name) {
            this.name = name;
        }
        public void sleep() {
            System.out.println("zzz");
        }
        public void eat() {
            System.out.println(this.name + "Eating..");
        }
    }
    public static class Dog extends Animal implements NoiseCapable{
        public Dog() {
            super("Dog");
        }
        public void bark() {
            System.out.println("!!");
        }
        public void makeNoise(){
            bark();
        }
    }
    public static class Cat extends Animal implements NoiseCapable{
        private String name;
        public Cat() {
            super("Cat");
            this.name = "Cat";

        }
        public Cat(String name){
            super(name);
            this.name = name;
        }
        public void purr() {
            System.out.println(this.name +"purr");
        }
        public void makeNoise(){
            purr();
        }
    };
}
