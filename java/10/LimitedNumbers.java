import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

public class LimitedNumbers {
    public static void main(String[] args) {
      ArrayList<Integer> lista = new ArrayList<>();
      Integer input = 0;
      Scanner scan = new Scanner(System.in);
      while (input >= 0) {
        System.out.println("Kirjoita asia:");
        input = Integer.valueOf(scan.nextLine());
        if(input > 0) {
          lista.add(input);
        }
      }
      
      List<Integer> filteredLista = lista.stream().filter((s -> s >= 0 && s <= 5)).toList();
      filteredLista.forEach(s -> System.out.println(s));
    }
}