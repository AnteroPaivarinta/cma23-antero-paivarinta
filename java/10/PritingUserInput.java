import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

public class PritingUserInput {
    public static void main(String[] args) {
      ArrayList<String> lista = new ArrayList<>();
      String input = "";
      Scanner scan = new Scanner(System.in);
      while (!input.equals( "end")){
        System.out.println("Kirjoita asia:");
        input = scan.nextLine();
        if(!input.equals( "end")) {
          lista.add(input);
        }
      }
      lista.stream().forEach((s -> System.out.println(s)));
    }
}