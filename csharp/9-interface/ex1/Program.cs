class Program
{
    public interface IInfo
    {
        string InfoText { get; set; }
        void PrintInfo();
    }

    public class Product : IInfo
    {
        public string InfoText { get; set; }

        public void PrintInfo()
        {
            Console.WriteLine($"Product Info: {InfoText}");
        }
    }

    public class Category : IInfo
    {
        public string InfoText { get; set; }

        public void PrintInfo()
        {
            Console.WriteLine($"Category Info: {InfoText}");
        }
    }
    static void Main(string[] args)
    {
        List<IInfo> lista = new List<IInfo>();
        Product a = new Product();
        Category b = new Category();
        a.InfoText = "BLAALBLLAAA";
        b.InfoText = "JOOOOOO";
        lista.Add(a);
        lista.Add(b);
        foreach(IInfo item in lista)
        {
            item.PrintInfo();
        }

    }
}
