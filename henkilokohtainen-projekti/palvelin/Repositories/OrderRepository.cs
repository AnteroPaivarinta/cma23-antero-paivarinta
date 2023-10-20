using palvelin.Models;
using palvelin.Repositories;

namespace palvelin.Repositories
{
    public class OrderRepository : IOrderRepository
    {

        private readonly DatabaseContext _context;
        public OrderRepository(DatabaseContext context)
        {
            _context = context;
        }

        public List<Orderclass> GetOrders() => _context.Orders.ToList();
        public Orderclass GetOrder(string id) { return _context.Orders.FirstOrDefault(c => c.id == id); }

        public void AddOrder(Orderclass order)
        {
            _context.Orders.Add(order);
            _context.SaveChanges();
        }

        public void DeleteOrder(string id)
        {
            _context.Orders.Remove(GetOrder(id));
            _context.SaveChanges();
        }

        public void UpdateOrder(string id, Orderclass newOrder)
        {
            Orderclass order = _context.Orders.FirstOrDefault((val) => val.id == id);
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
