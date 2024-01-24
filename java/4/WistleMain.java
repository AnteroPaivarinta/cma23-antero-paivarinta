import java.util.Scanner;
import java.util.*;

public class WistleMain {
  
  public static void main(String[] args) {
    Whistle duckWhistle = new Whistle( "Kvaak" );
    Whistle roosterWhistle = new Whistle( "Peef" );
    
    duckWhistle.sound();
    roosterWhistle.sound();
    duckWhistle.sound();
  } 
  
}
  
class Whistle {
  private String song;

  public Whistle(String song) {
    this.song = song;
  }

  public void sound() {
    System.out.println(this.song);
  }

}
 
