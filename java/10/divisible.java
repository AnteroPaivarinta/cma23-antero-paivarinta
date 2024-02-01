import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

public class divisible {
    public static void main(String[] args) {
        
      ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(3);
        numbers.add(2);
        numbers.add(-17);
        numbers.add(-5);
        numbers.add(7);
        ArrayList<Integer> divisible = divisibleFunction(numbers);
        divisible.stream()
                .forEach(num -> System.out.println(num));

    }
    public static ArrayList<Integer> divisibleFunction(ArrayList<Integer> numbers) {
      return numbers.stream().filter(n -> n % 2 == 0 || n % 5 == 0 || n % 3 == 0).collect(Collectors.toCollection(ArrayList::new));
    }
}