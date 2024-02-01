import java.util.ArrayList;
import java.util.Scanner;
import java.util.stream.DoubleStream;

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

        System.out.println("Negative/Positive (n/p)");
        Scanner scan = new Scanner(System.in);
        String x = scan.nextLine();
        int [] tulos = new int[lista.size()];
        if (x == "n") {
             tulos = lista.stream()
            .mapToInt(s -> Integer.valueOf(s))
            .filter(t -> t  < 0)
            .toArray();
                

            
            
        } if (x == "p") {
            tulos = lista.stream()
            .mapToInt(s -> Integer.valueOf(s))
            .filter(t -> t > 0)
            .toArray();
        };

        
        System.out.println("SelectedAverage:" +tulos);

    }
}