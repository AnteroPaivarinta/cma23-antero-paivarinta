import java.util.Scanner;

public class HideoutMission {
    public static void main(String[] args) {
      
        Hideout<String> den = new Hideout<>();
        System.out.println(den.isInHideout());
        den.putIntoHideout("peekaboo");
        System.out.println(den.isInHideout());
        System.out.println(den.takeFromHideout());
        System.out.println(den.isInHideout());
        den.putIntoHideout("toodaloo");
        den.putIntoHideout("heelloo");
        System.out.println(den.isInHideout());
        System.out.println(den.takeFromHideout());
        System.out.println(den.isInHideout());
    }

    public static class Hideout<T> {
        private T element;

        public Hideout() {
            this.element = null;
        }

        public void putIntoHideout(T toHide) {
            this.element = toHide;
        }
    
        public T takeFromHideout() {
            T hidden = this.element;
            this.element = null;
            return hidden;
        }
    
        public boolean isInHideout() {
            if(this.element != null ){
                return false;
            } else {
                return true;
            }
        }
    }

    
}