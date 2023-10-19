using palvelin.Models;
using palvelin.Repositories;

namespace palvelin.Repositories
{
    public class OrderRepository : IOrderRepository
    {

        private readonly OrderContext _context;
        public OrderRepository(OrderContext context)
        {
            _context = context;
        }

        public Order GetProduct(string id) {
            return _context.Orders.FirstOrDefault(c => c.id == id);
        }

        public List<Order> GetProducts() =>
            _context.Orders.ToList();
        public void AddProduct(Product product)  {
            
        }

        public void DeleteProduct(string id) { }
        public void UpdateProduct(int id, Product product) { }  
    }
}
