import java.util.*;

public class ItemsMain {
  
  public static void main(String[] args) {
     Scanner scanner = new Scanner(System.in);
      ArrayList<Item> itemsList = new ArrayList<>();

      System.out.println("Enter names of items (press Enter without input to stop):");

      while (true) {
          String itemName = scanner.nextLine().trim();

          if (itemName.isEmpty()) {
              break;
          }

          Item newItem = new Item(itemName);
          itemsList.add(newItem);
      }

      System.out.println("\nAll items:");
      for (Item item : itemsList) {
          System.out.println(item.toString());
      }
  } 
  
}

class Item {
  private String name;
  private long creationTime;

  public Item(String name) {
      this.name = name;
      this.creationTime = System.currentTimeMillis();
  }

  @Override
  public String toString() {
      return "Item{name='" + name + "', creationTime=" + creationTime + '}';
  }
}
