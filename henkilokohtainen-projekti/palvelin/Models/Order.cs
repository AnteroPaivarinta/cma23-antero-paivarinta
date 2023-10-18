namespace palvelin.Models
{
    public class Order
    {
        public string id;
        public string name;
        public string price;
        public string product_id;
        public string order_time;
        
        public Order(string id, string name, string price,string product_id, string order_time)
        {
            this.id = id;   
            this.name = name;
            this.price = price;
            this.order_time = order_time;
            this.product_id = product_id;
        }
    }
}
