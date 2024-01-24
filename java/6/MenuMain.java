import java.util.ArrayList;

public class MenuMain {
  public static void main(String[] args) {
    Menu menu = new Menu();
    menu.addMeal("Tofu ratatouille");
    menu.addMeal("Chilli coconut chicken");
    menu.addMeal("Chilli coconut chicken");
    menu.addMeal("Meatballs with mustard sauce");
    menu.printMeals();
    menu.clearMenu();
    System.out.println();
    menu.addMeal("Tomato and mozzarella salad");
    menu.printMeals();
  } 
}

class Menu{
  private ArrayList<String> meals;

  public Menu() {
      this.meals = new ArrayList<>();
  }
  public void addMeal(String meal) {
    this.meals.add(meal);
  }

  public void printMeals() {
    for( int i = 0; i < meals.size(); i++){
      System.out.println(meals.get(i));
    }
  }

  public void clearMenu() {
    this.meals.clear();
  }
}