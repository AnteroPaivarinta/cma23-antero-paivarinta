import java.util.ArrayList;

public class MessagingServiceMain {
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

class MessagingService{

  private ArrayList<Message> messages;

  public MessagingService(ArrayList<Message> messages) {
    this.messages = messages;
  }

  public ArrayList<Message> getMessages() {
    return this.messages;
  };

  public void add(Message message){
    if(message.content.length() < 280){
      this.messages.add(message);
    }
  };
  
}

class Message {
  public String sender;
  public String content;
  public Message(String sender,  String content){
    this.sender = sender; 
    this.content = content;
  }
  

}
