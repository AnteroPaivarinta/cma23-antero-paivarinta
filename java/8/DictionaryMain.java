import java.util.ArrayList;
import java.util.HashMap;


public class DictionaryMain {
  public static void main(String[] args) {
    DictionaryOfManyTranslations dictionary = new DictionaryOfManyTranslations();
    dictionary.add("lie", "maata");
    dictionary.add("lie", "valehdella");
    
    dictionary.add("bow", "jousi");
    dictionary.add("bow", "kumartaa");
    
    System.out.println(dictionary.translate("lie"));
    dictionary.remove("bow");
    System.out.println(dictionary.translate("bow"));
  }
  public static class DictionaryOfManyTranslations {
    public HashMap<String, ArrayList<String>> map;

    public DictionaryOfManyTranslations() {
      this.map = new HashMap<>();
    }

    public void add(String word, String translation){
      ArrayList lista = this.map.get(word);
      lista.add(translation);
    }
  
    public ArrayList<String> translate(String word) {
      ArrayList lista = this.map.get(word);
      return lista;
    } 
  
    public void remove(String word) {
      this.map.remove(word);
    }
  }
 
}




