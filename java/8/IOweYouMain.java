import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class IOweYouMain {
  public static void main(String[] args) {
    IOU mattsIOU = new IOU();
    mattsIOU.setSum("Arthur", 51.5);
    mattsIOU.setSum("Michael", 30);

    System.out.println(mattsIOU.howMuchDoIOweTo("Arthur"));
    System.out.println(mattsIOU.howMuchDoIOweTo("Michael"));
  } 
  public static class IOU {
    private HashMap<String, Double> map;
    public IOU(){
      this.map = new HashMap<>();
    }
    public void setSum(String toWhom, double amount){

      this.map.put(toWhom, amount);
    }
    public double howMuchDoIOweTo(String toWhom){
      if(this.map.get(toWhom) != null){
        return this.map.get(toWhom);
      } else {
        return -1.0;
      }
    }
  }
}

