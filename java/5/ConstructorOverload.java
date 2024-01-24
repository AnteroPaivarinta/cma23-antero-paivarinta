class ConstructorOverload {
  public static void main(String[] args) {
    Product tapeMeasure = new Product("Tape measure");
    Product plaster = new Product("Plaster", "home improvement section");
    Product tyre = new Product("Tyre", 5);
    
    System.out.println(tapeMeasure);
    System.out.println(plaster);
    System.out.println(tyre);
  } 
}

class Product{
  private String name;
  private String location;
  private int weight;

  public Product(String name){
    this.name = name;
    this.weight = -1;
  }
  public Product(String name, String location){
    this.location = location;
  }

  public Product(String name, int weight){
    this.name = name;
    this.weight = weight;

  }

  public void advance(){

  }
  public String toString(){
    if( this.location == "" && this.weight == -1 ){
      return "Name is " + this.name + "and location undefined";

    } else if(this.location != "" && this.weight > -1) {
      return "Name is " + this.name + " , location is undedined and weight is " + this.weight;
    } else {
      return "Name is " + this.name + "and weight is undefined and location is " + this.location;
    }
   
    
  }
}