import java.util.ArrayList;
import java.util.Scanner;

public class CubesMain {
  public static void main(String[] args) {
    System.out.println("Program starts");
    String input = "";
    ArrayList<Integer> lista = new ArrayList<Integer>();
    while(input != "end"){
      System.out.println("Print Number: ");
      Scanner scan = new Scanner(System.in);
      input = scan.nextLine();
      if(input != "end"){
        lista.add(Integer.valueOf(input));
      }
    }
    int sum = 0;
    int total = 0;
    for( int i = 0; i < lista.size(); i++ ){
      if( lista.get(i) > 0 ) {
        sum = sum + lista.get(i);
        total =+1;
      }
    }
    if( total == 0 ){
      System.out.println("Ei positiviisa arvoja");
    } else {
      System.out.println("Keskiarvo: " + sum/total*1.0);
    }
  } 
}

