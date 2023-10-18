using palvelin.Models;

namespace palvelin.Repositories
{
    public class OrderRepository : IOrderRepository
    {

        private readonly OrderContext _context;
        public OrderRepository(OrderContext context)
        {
            _context = context;
        }

        public Order GetProduct(string id ) { 
            return _context.Orders.FirstOrDefault(c => c.id == id);
        }

        public List<Order> GetProducts() =>
            _context.Orders.ToList();
    }
}
