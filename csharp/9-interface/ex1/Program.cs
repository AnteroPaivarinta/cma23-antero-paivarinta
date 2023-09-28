class Program
{
    class Message
    {
        public static int TotalMessages;
        public static string LastMessage;
        public string MessageText;
        public Message(string a)
        {
            this.MessageText = a;
            TotalMessages++;
            LastMessage = a;
        }



        static void Main(string[] args)
        {
            List<Message> allMessages = new List<Message>();
            for (int i = 0; i < 5; i++)
            {
                Message mese = new Message("j");
                allMessages.Add(mese);
            }
            Console.WriteLine(Message.TotalMessages);
        }
    }

}
