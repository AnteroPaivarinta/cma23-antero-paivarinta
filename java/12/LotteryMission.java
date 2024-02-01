import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class LotteryMission {
    public static void main(String[] args) {
      LotteryRow row = new LotteryRow();
      ArrayList<Integer> lotteryNumbers = row.numbers();

      System.out.println("Lottery numbers:");
      for (int number: lotteryNumbers) {
          System.out.print(number + " ");
      }

      System.out.println("");
    } 
    public static class LotteryRow {
      private ArrayList<Integer> numbers;

      public LotteryRow() {
          this.randomizeNumbers();
      }

      public ArrayList<Integer> numbers() {
          return this.numbers;
      }

      public boolean containsNumber(int number) {

          return false;
      }

      public void randomizeNumbers() {
          // initialize the list for numbers
          Random generateRandom = new Random();
          this.numbers = new ArrayList<>();
          for(int i = 0; i < 8; i++) {
              int number = generateRandom.nextInt(40);
              if(this.numbers.contains((number))){
                while(this.numbers.contains(number)) {
                  number = generateRandom.nextInt(40);
                  if(!this.numbers.contains((number))) {
                    this.numbers.add(number);
                    break;
                  } else {
                    continue;
                  }
                   
                }
              } else {
                this.numbers.add(number); 
              }
          }
      }

      public boolean equals(Object other) {
          return false;
      }
    }
}