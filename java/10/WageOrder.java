import java.lang.reflect.Member;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

public class WageOrder {
    public static void main(String[] args) {
        Human human1 = new Human("Alice", 50000);
        Human human2 = new Human("Bob", 60000);
        Human human3 = new Human("Charlie", 45000);
        List<Human> humanList = new ArrayList<>();
        humanList.add(human1);
        humanList.add(human2);
        humanList.add(human3);
        Collections.sort(humanList);
        System.out.println("Lajiteltu lista (wage suurimmasta pienimpään):");
        for (Human human : humanList) {
            System.out.println(human.getName() + ": " + human.getWeight());
        }
    }
    public static class Human implements Comparable<Human> {
      private String name;
      private int weight;
      public Human(String name, int weight) {
          this.name = name;
          this.weight = weight;
      }
  
      public String getName() {
          return this.name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  
      public int getWeight() {
          return this.weight;
      }
  
      public void setWeight(int weight) {
          this.weight = weight;
      }
      @Override
      public int compareTo(Human member) {
          if (this.weight == member.getWeight())  {
              return 0;
          } else if (this.weight > member.getWeight()) {
              return 1;
          } else {
              return -1;
          }
      }
    }

    
}

