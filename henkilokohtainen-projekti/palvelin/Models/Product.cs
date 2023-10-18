using System.ComponentModel;

namespace palvelin.Models
{
    public class Product
    {
        public string id { get; set; }
        public string price { get; set; }
        public string category { get; set; }
        public string name { get; set; }

        public Product(string id, string price, string category, string name)
        {
            this.id = id;
            this.category = category;
            this.name = name;
            this.price = price;
            this.category = category;
        }
    }
}
