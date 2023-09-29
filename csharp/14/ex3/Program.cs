using System;
using System.Threading;

class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Press Enter to start resource loading...");

        while (true)
        {
            if (Console.ReadKey().Key == ConsoleKey.Enter)
            {
                Console.WriteLine();
                Thread loaderThread = new Thread(LoadDataAsync);
                loaderThread.Start();
            }
        }
    }

    public async static void LoadDataAsync()
    {
        int progress = 0;
        while (progress <= 100)
        {
            Console.WriteLine("Loading: " + progress + "%");
            progress++;
            Thread.Sleep(10);
        }
        Console.WriteLine("Resource loading complete!");
    }
}