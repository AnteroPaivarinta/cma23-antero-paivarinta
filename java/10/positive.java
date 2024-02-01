import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

public class positive {
    public static void main(String[] args) {
        
      List<Integer> list = new ArrayList<>();
      list.add(3);
      list.add(7);
      list.add(4);
      list.add(2);
      list.add(6);

    }
    public static List<Integer> positiveNumbers(List<Integer> numbers) {
      return numbers.stream().filter(n -> n > 0).collect(Collectors.toCollection(ArrayList::new));
    }
}