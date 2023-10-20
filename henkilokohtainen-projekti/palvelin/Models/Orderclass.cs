namespace palvelin.Models
{
    public class Orderclass
    {
        public string id { get; set; }
        public string name { get; set; }
        public string user_id { get; set; }
        public string product_id { get; set; }
        public string order_time { get; set; }  
        
        public Orderclass(string id, string name, string user_id, string product_id, string order_time)
        {
            this.id = id;
            this.order_time = order_time;
            this.product_id = product_id;
            this.user_id = user_id; 
            this.name = name;   
        }
    }
}
