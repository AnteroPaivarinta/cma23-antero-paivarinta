import java.util.Scanner;
import java.util.Random;

public class Numbers {
    public static void main(String[] args) {
        System.out.println("Kuinka monta kertaa random numero?");
        Scanner scan = new Scanner(System.in);
        Integer numero = Integer.valueOf(scan.nextLine());
        Random random = new Random(); 

        for( int i = 0; i < numero ; i++) {
          int a = random.nextInt(10);
          System.out.println(a);
        }
    }
}