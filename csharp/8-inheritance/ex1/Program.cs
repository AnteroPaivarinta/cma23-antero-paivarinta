// See https://aka.ms/new-console-template for more information
using System.Collections;
using System.ComponentModel;
using System.IO;
class Animal
{
    public void Greet() { Console.WriteLine("Päivää..."); }
  

}
class Cat : Animal
{
    public void Meow() { Console.WriteLine("Meow!"); }
}
class Dog : Animal
{
    public void Bark() { Console.WriteLine("Bark!"); }
}

class Pig : Animal
{
    public void pigfunc() { Console.WriteLine("NONIIIIN!!!!"); }
}


class Program
{
    static void Main(string[] args)
    {
        Pig A = new Pig();
        Dog B = new Dog();
        Cat C = new Cat();
        List<Animal> allAnimals = new List<Animal>();
        allAnimals.Add(A);
        allAnimals.Add(B);
        allAnimals.Add(C);

        foreach (Animal elements in allAnimals)
        {
            elements.Greet();
        }



    }
}
