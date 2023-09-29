class Program
{
    public static void Main(string[] args)
    {
        while (true)
        {
            if (Console.ReadKey().Key == ConsoleKey.Enter)
            {
                Console.WriteLine();
                Thread loaderThread = new Thread(LoadData);
                loaderThread.Start();
            }
        }
    }

  

    public static void LoadData()
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