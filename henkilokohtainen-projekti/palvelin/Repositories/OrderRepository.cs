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

        public Order GetContact(int id) =>
            _context.Orders.FirstOrDefault(c => c.Id == id);

        public List<Order> GetContacts() =>
            _context.Orders.ToList();
    }
}
