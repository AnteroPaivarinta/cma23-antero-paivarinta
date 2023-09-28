namespace ex1
{
    class Hello
    {
        delegate void PrintDelegate();
        static void Main(string[] args)
        {
            void ReleaseWater()
            {
                Console.WriteLine("Release water");
            }
            void ReleaseFertilizer()
            {
                Console.WriteLine("Release Fertilizer");
            }
            void IncreaseTemperature()
            {
                Console.WriteLine("Increase Temperature ");
            }
            PrintDelegate print = ReleaseWater;


            while (true)
            {
                Console.WriteLine("Komento: ");

                string answer = Console.ReadLine();
                if (answer == "exit")
                {
                    break;
                }

                if (answer == "f")
                {
                    print += ReleaseFertilizer;
                    print();

                }
                if (answer == "t")
                {
                    print += IncreaseTemperature;
                    print();
                }

                if (answer == "run")
                {
                    print += ReleaseFertilizer;
                    print += IncreaseTemperature;
                    print();

                }
            }
        }
    }
}
