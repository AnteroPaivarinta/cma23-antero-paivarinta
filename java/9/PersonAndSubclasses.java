import java.util.Scanner;

public class PersonAndSubclasses {
    public static void main(String[] args) {
        Person ada = new Person("Ada Lovelace", "24 Maddox St. London W1S 2QN");
        Person esko = new Person("Esko Ukkonen", "Mannerheimintie 15 00100 Helsinki");
        System.out.println(ada);
        System.out.println(esko);
        Student ollie = new Student("Ollie", "6381 Hollywood Blvd. Los Angeles 90028");
        System.out.println(ollie);
        System.out.println("Study credits " + ollie.credits());
        ollie.study();
        System.out.println("Study credits " + ollie.credits());
        Teacher adaTeacher = new Teacher("Ada Lovelace", "24 Maddox St. London W1S 2QN", 1200);
        Teacher eskoTeacher = new Teacher("Esko Ukkonen", "Mannerheimintie 15 00100 Helsinki", 5400);
        System.out.println(adaTeacher);
        System.out.println(eskoTeacher);

        Student ollieStudent = new Student("Ollie", "6381 Hollywood Blvd. Los Angeles 90028");

        int i = 0;
        while (i < 25) {
            ollieStudent.study();
            i = i + 1;
        }
        System.out.println(ollieStudent);

    }
}

class Person {
    private String name;
    private String address;
    public Person(String name, String address){
        this.name = name;
        this.address = address; 
    }
    public String toString() {
        return this.name + "\n"+ this.address;
    }
};
class Student extends Person {
    private int credits;
    public Student(String name, String address){
        super(name, address);
        this.credits = 0;
    }
    public int credits() {
        return this.credits;
    }
    public void study() {
        this.credits = this.credits + 1;
    }
}
class Teacher extends Person{
    private int Salary;
    public Teacher(String name, String address, int Salary){
        super(name, address);
        this.Salary = Salary;
    }
    public String toString() {
        return super.toString() + "\n" + "Salary: " + this.Salary;
    }
}