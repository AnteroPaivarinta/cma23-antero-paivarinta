import java.util.Scanner;
import java.util.*;

public class MainDoor {
  
  public static void main(String[] args) {
    Door alexander = new Door();

    alexander.knock();
    alexander.knock();
  } 
  
}
  
class Door {
  private String song;

  public Door() {
    this.song = "Who's there?";
  }

  public void knock() {
    System.out.println(this.song);
  }

}
 
