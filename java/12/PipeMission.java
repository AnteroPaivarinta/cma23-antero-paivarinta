import java.util.Scanner;
import java.util.LinkedList;

public class PipeMission
 {
    public static void main(String[] args) {
      Pipe<String> pipe = new Pipe<>();
      pipe.putIntoPipe("dibi");
      pipe.putIntoPipe("dab");
      pipe.putIntoPipe("dab");
      pipe.putIntoPipe("daa");
      while(pipe.isInPipe()) {
          System.out.println(pipe.takeFromPipe());
      }
    };

    public static class Pipe<T> {

      private LinkedList<T> event;

      public Pipe() {
        this.event = new LinkedList<>();
      } 

      public void putIntoPipe(T value) {
        this.event.add(value);
      }

      public T takeFromPipe() {
        if (isInPipe()) {
            return this.event.removeFirst();
        } else {
            return null;
        } 
      }

      public boolean isInPipe() {
        return !this.event.isEmpty();
      }
    }
}