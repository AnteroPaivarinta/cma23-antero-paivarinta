import java.util.ArrayList;

public class Searching {
  public static void main(String[] args) {
    
  }

  public static int linearSearch(ArrayList<Book> books, int searchedId){
    Book a = null;
    for(int i = 0; i < books.size(); i++) {
      if (books.get(i).id == searchedId) {
        a = books.get(i);
        break;
      }
    };
    if(a != null){
      return a.id;
    } else{
      return -1;
    }
  }

  public static int binarySearch(ArrayList<Book> books, int searchedId) {
    int index = -1;
    for(int i = 0; i < books.size(); i++) {
      if (books.get(i).id == searchedId) {
        index = i;
        break;
      }
    };
    if(index != -1){
      return index;
    } else{
      return -1;
    }
  }

  public class  Book {
    public int id;
    public String name;
    public Book(int id, String name){
      this.id = id;
      this.name = name;
    }
  }
}
