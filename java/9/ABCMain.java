import java.util.Scanner;

public class ABCMain {
    public static void main(String[] args) {
        A a = new A();
        B b = new B();
        C c = new C();

        a.a();
        b.b();
        c.c();

        C ca = new C();

        ca.a();
        ca.b();
        ca.c();
    }
    
}

class A {
    public A(){
        
    }
    public void a() {
        System.out.println("A");
    }
};
class B extends A {
    public B(){
        super();
    }
    public void b() {
        System.out.println("B");
    }
}
class C extends B{
    public C(){
        super();
    }
    public void c() {
        System.out.println("C");
    }
}