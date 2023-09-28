
public class Program
{
    public static void Main()
    {
        List<string> stringList = GetPopulatedList<string>("Hello, there", 5);
        foreach (string value in stringList)
        {
            Console.WriteLine(value);
        }

        List<int> intList = GetPopulatedList<int>(42, 3);
        foreach (int value in intList)
        {
            Console.WriteLine(value);
        }
    }

    public static List<T> GetPopulatedList<T>(T value, int length)
    {
        List<T> resultList = new List<T>(length);

        for (int i = 0; i < length; i++)
        {
            resultList.Add(value);
        }

        return resultList;
    }
}