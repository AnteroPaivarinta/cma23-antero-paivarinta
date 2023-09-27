using System.IO;
class Animal
{
    public string name;
    public string sound;
    public Animal(string name, string sound)
    {
        this.name = name;
        this.sound = sound;
    }
    public void Greet()
    {
        Console.WriteLine(this.name + "says " + this.sound);
    }
}

class Program
{
    static void Main(string[] args)
    {

        Animal A = new Animal("joo", "BADABIMBADABUm");
        Animal B = new Animal("OK", "BADABIMBADABUm");
        A.Greet();
        B.Greet();

    







    }
}
