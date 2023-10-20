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

        public List<Order> GetOrders() => _context.Orders.ToList();
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

        public void UpdateOrder(string id, Order newOrder)
        {
            Order order = _context.Orders.FirstOrDefault((val) => val.id == id);
            order.order_time = newOrder.order_time;
            order.name = newOrder.name;
            order.id = newOrder.id;
            order.order_time = newOrder.order_time;
            order.product_id = newOrder.product_id;
            _context.Orders.Update(order);
            _context.SaveChanges();
            _context.SaveChanges();
        }
    }
}
