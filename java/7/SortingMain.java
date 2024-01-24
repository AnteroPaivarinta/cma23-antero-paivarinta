import java.util.ArrayList;
import java.util.Collections;

public class SortingMain {
  public static void main(String[] args) {
    int[] numbers = {6, 5, 8, 7, 11};
    System.out.println("Smallest: " + smallest(numbers));
  }

  public static int smallest(int[] array){
    ArrayList<Integer> lista = new ArrayList<>();
    for(int i = 0 ; i < array.length; i++ ){
      lista.add(array[i]);
    }
    Collections.sort(lista);
    int returnValue = lista.get(0);  // Korjattu tämä rivi
    return returnValue;
  } 
  public static void sort(String[] array){
    ArrayList<String> lista = new ArrayList<>();
    for(int i = 0; i < array.length ; i++ ){
      lista.add(array[i]);
    };
    Collections.sort(lista);
    System.out.println(lista);
  };
  public static void sortIntegers(ArrayList<Integer> integers){
    Collections.sort(integers);
    System.out.println(integers);
  };
  public static void sortStrings(ArrayList<String> strings) {
    Collections.sort(strings);
    System.out.println(strings);
  };
}