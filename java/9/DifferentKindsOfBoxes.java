import java.util.ArrayList;
import java.util.Scanner;

public class DifferentKindsOfBoxes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Write a message: ");
    }
    
    public abstract class Box {

        public abstract void add(Item item);

        public void add(ArrayList<Item> items) {
            for (Item item : items) {
                Box.this.add(item);
            }
        }

        public abstract boolean isInBox(Item item);
    }
}
