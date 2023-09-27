using System.IO;
class User
{
    public string user;
    public string password;// Accessible only inside the class
                           // Accessible everywhere within the namespace
}

class Program
{
    static void Main(string[] args)
    {

        User a = new User();
        Console.WriteLine("username");
        string name = Convert.ToString(Console.ReadLine());

        Console.WriteLine("Password");
        string pw = Convert.ToString(Console.ReadLine());



        a.user = name;
        a.password = pw;

        Console.WriteLine("Nämä ovat tietosi: " + a.user + " ja " + a.password);





    }
}
