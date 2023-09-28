// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
List<string> list = new List<string>();
while (true)
{
    Console.WriteLine("Anna merkkijono: ");
    string x = Console.ReadLine();
    if(x == " ")
    {
        Console.WriteLine("Anna tiedoston nimi: ");
        string file = Console.ReadLine();
        string path = @"C:\code\"+file+".txt";

        if (File.Exists(path))
        {
            Console.WriteLine($"The file {path} does not exist.");
        }
        else
        {

            try
            {
                // Avataan tiedosto kirjoittamista varten, luomme sen, jos se ei ole olemassa
                using (StreamWriter sw = new StreamWriter(path))
                {
                    // Kirjoitetaan teksti tiedostoon
                    for( int i =0; i < list.Count; i++)
                    {
                        sw.WriteLine(list[i]);

                    }
                }
                Console.WriteLine("Teksti kirjoitettu onnistuneesti tiedostoon.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Virhe: {ex.Message}");
            }
        }

        break;

    }
    else
    {
        list.Add(x);
    }
}
