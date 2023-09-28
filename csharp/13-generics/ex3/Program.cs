
using System.ComponentModel;
using System.Collections;
using System.Data.Common;
using System.IO;
using System.Security.Cryptography;
using System.Reflection.Metadata;

public class Program
{
    public class User {
        public string name;
        private int id;
        public User(string a,int b)
        {
            this.id = b;
            this.name = a;
        }

        public static void Main()
        {
            List<string> lista2 = funktio();
            Console.WriteLine("Kerro nimi: ");
            string name = Console.ReadLine();
            var x = lista2.Where((value) => value.Equals(name));
            if (x.Count() < 10)
            {
                int count = 0;
                List<User> users = new List<User>();
                Console.WriteLine("Results: " + x.Count());
                foreach (var val in x)
                {
                    User user = new User(val, count);
                    users.Add(user);
                    count++;
                   
                }

                List<User> sorted = users.OrderBy(value => value.name).ToList();
                Console.WriteLine("SORTED: ");
                foreach (var val in sorted)
                {
                    Console.WriteLine(val.name);

                }
            }
            else
            {
                Console.WriteLine("Results: " + x.Count());
            }

        }
    }
    public static List<string> funktio()
    {
        List<string> parts = new List<string>();
        string path = @"C:\code\cma23-antero-paivarinta\csharp\13-generics\ex2\names.txt";
        var items = File.ReadAllLines(path)
            .Select(line =>     // Using lambda expression, return the new Author objects
            {
                return line;
            })
            .ToList();
        foreach (var item in items)
        {
            parts.Add(item);

        }
        return parts;
    }

}