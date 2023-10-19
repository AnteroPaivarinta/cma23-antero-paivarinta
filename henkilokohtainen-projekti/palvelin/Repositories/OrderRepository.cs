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

        public List<Order> GetOrders() =>
          _context.Orders.ToList();
        public Order GetOrder(string id) { return _context.Orders.FirstOrDefault(c => c.id == id); }

        public void AddOrder(Order order)
        {
            _context.Orders.Add(order);
            _context.SaveChanges();
        }

        public void DeleteOrder(string id)
        {
            _context.Orders.Remove(GetOrder(id));
            _context.SaveChanges();
        }

        public void UpdateOrder(int id, Order order) 
        {
           
            _context.SaveChanges();
        }

    }
}
