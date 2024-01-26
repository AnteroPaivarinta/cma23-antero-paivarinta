import java.util.Scanner;

public class TacoBoxes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Write a message: ");
    }

    public interface TacoBox {
        int tacosRemaining();
        void eat();
    }

    public class TripleBox implements TacoBox {
        private int tacos;
        public TripleBox(){
            this.tacos = 3;
        }
        @Override
        public int tacosRemaining() {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'tacosRemaining'");
        }
        @Override
        public void eat() {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'eat'");
        }
    }
    public class CustomTacoBox implements TacoBox {
        private int tacos;
        public CustomTacoBox(int tacos) {
            this.tacos = tacos;
        }
        @Override
        public int tacosRemaining() {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'tacosRemaining'");
        }
        @Override
        public void eat() {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'eat'");
        }
    }
}