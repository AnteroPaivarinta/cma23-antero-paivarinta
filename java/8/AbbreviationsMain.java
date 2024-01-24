import java.util.HashMap;


public class AbbreviationsMain {
  public static void main(String[] args) {
    Abbreviations abbreviations = new Abbreviations();
    abbreviations.addAbbreviation("e.g.", "for example");
    abbreviations.addAbbreviation("etc.", "and so on");
    abbreviations.addAbbreviation("i.e.", "more precisely");

    String text = "e.g. i.e. etc. lol";

    for (String part: text.split(" ")) {
        if(abbreviations.hasAbbreviation(part)) {
            part = abbreviations.findExplanationFor(part);
        }

        System.out.print(part);
        System.out.print(" ");
    }
    System.out.println();
  }
  public static class Abbreviations {

    private HashMap<String, String> map; 
  
    public  Abbreviations() {
      this.map = new HashMap<>();
    }
    public void addAbbreviation(String abbreviation, String explanation) {
      map.put(abbreviation, explanation);
    }
    public boolean hasAbbreviation(String abbreviation) {
      String value = map.get(abbreviation);
      if(value != null){
        return true;
      } else {
        return false;
      }
    } 
    public String findExplanationFor(String abbreviation) {
       return map.get(abbreviation);
    }
  };
  
}




