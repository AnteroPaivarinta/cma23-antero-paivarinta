import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class SameDate {
  public static void main(String[] args) {
    SimpleDate d = new SimpleDate(1, 2, 2000);
    System.out.println(d.equals("heh"));
    System.out.println(d.equals(new SimpleDate(5, 2, 2012)));
    System.out.println(d.equals(new SimpleDate(1, 2, 2000)));
  } 
  public static class SimpleDate {
    public int day;
    public int month;
    public int year;

    public SimpleDate(int a, int b, int c){
      this.day = a;
      this.month = b;
      this.year = c;
    }
    public boolean equals(Object object) {
      if ( !(object instanceof SimpleDate)) {
        return false;
      } else {
        SimpleDate a = (SimpleDate) object;
        if(a.day == this.day  && a.month == this.month && this.year == this.year){
          return true;
        } else {
          return false;
        }
      }
    }
  }
}

