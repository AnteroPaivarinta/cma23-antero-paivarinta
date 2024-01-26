import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class MapMission {
    public static void main(String[] args) {
        Map<String, String> names = new HashMap<>();
        names.put("1", "first");
        names.put("2", "second");
        System.out.println(returnSize(names));
    }
    public static int returnSize(Map<String, String> lista) {
        return lista.size();
    }
}