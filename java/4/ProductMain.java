
public class ProductMain {
  public static void main(String[] args) {
    Door alexander = new Door();

    alexander.knock();
    alexander.knock();
  } 
  class Product{
    private String name;
    private double price;
    private int quantity;
    public Product (String initialName, double initialPrice, int initialQuantity){
      this.name = initialName;
      this.price = initialPrice;
      this.quantity = initialQuantity;
    }
    public void printProduct(){
      
      String totalString = this.name + ", " + String.valueOf(this.price) + ", " + String.valueOf(this.quantity);
      System.out.println(totalString);
    }
  }
}
