import java.util.ArrayList;
import java.util.Scanner;

public class AverageOfNumbers {
    public static void main(String[] args) {
        String number = "";
        ArrayList <Integer> lista = new ArrayList<>();
        while (!number.equals("end")) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Enter number: ");
            number = scanner.nextLine();
            if(number != "end"){
                int parseNumber = Integer.valueOf(number);
                lista.add(parseNumber);
            }
        };
        double average = lista.stream()
            .mapToInt(s -> Integer.valueOf(s))
            .average()
            .getAsDouble();
        System.out.println(average);

    }
}